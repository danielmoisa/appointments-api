import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { GetAppointmentsFilterDto } from './dto/get-appointments-filter.dto';
import { AppointmentStatus } from './appointment-status.enum';
import { Appointment } from './appointment.entity';

@EntityRepository(Appointment)
export class AppointmentRepository extends Repository<Appointment> {
  private logger = new Logger('AppointmentRepository');
  async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
    user: User,
  ): Promise<Appointment> {
    const { title, description } = createAppointmentDto;

    const appointment = new Appointment();
    appointment.title = title;
    appointment.description = description;
    appointment.status = AppointmentStatus.OPEN;
    appointment.user = user;

    try {
      await appointment.save();
    } catch (error) {
      this.logger.error(
        `Failed to create appointment for user${user.username}. Data: ${createAppointmentDto}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
    delete appointment.user;

    return appointment;
  }

  async getAppointments(
    filterDto: GetAppointmentsFilterDto,
    user: User,
  ): Promise<Appointment[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('appointment');

    query.where('appointment.userId = :userId', { userId: user.id });

    if (status) {
      query.andWhere('appointment.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(appointment.title LIKE :search OR appointment.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    try {
      const appointments = await query.getMany();
      return appointments;
    } catch (error) {
      this.logger.error(
        `Failed to get appointments for user "${
          user.username
        }. Filters: ${JSON.stringify(filterDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }
}
