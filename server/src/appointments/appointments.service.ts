import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { GetAppointmentsFilterDto } from './dto/get-appointments-filter.dto';
import { AppointmentStatus } from './appointment-status.enum';
import { Appointment } from './appointment.entity';
import { AppointmentRepository } from './appointment.respository';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(AppointmentRepository)
    private appointmentRepository: AppointmentRepository,
  ) {}

  async getAppointments(filterDto: GetAppointmentsFilterDto, user: User) {
    return this.appointmentRepository.getAppointments(filterDto, user);
  }

  async getAppointmentById(id: number, user: User): Promise<Appointment> {
    const found = await this.appointmentRepository.findOne({
      where: { id, userId: user.id },
    });
    if (!found) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
    return found;
  }

  async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
    user: User,
  ): Promise<Appointment> {
    return this.appointmentRepository.createAppointment(
      createAppointmentDto,
      user,
    );
  }

  async deleteAppointmentById(id: number, user: User): Promise<void> {
    const result = await this.appointmentRepository.delete({
      id,
      userId: user.id,
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID "${id}" not found`);
    }
  }

  async updateAppointmentStatus(
    id: number,
    status: AppointmentStatus,
    user: User,
  ): Promise<Appointment> {
    const appointment = await this.getAppointmentById(id, user);
    appointment.status = status;
    await appointment.save();
    return appointment;
  }
}
