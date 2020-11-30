import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { GetAppointmentsFilterDto } from './dto/get-appointments-filter.dto';
import { AppointmentStatusValidationPipe } from './pipes/appointment-status-validation.pipe';
import { AppointmentStatus } from './appointment-status.enum';
import { Appointment } from './appointment.entity';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
@UseGuards(AuthGuard())
export class AppointmentsController {
  private logger = new Logger('AppointmentsController');
  constructor(private appointmentsService: AppointmentsService) {}

  @Get()
  getAppointments(
    @Query(ValidationPipe) filterDto: GetAppointmentsFilterDto,
    @GetUser() user: User,
  ): Promise<Appointment[]> {
    this.logger.verbose(
      `User "${
        user.username
      }" retrieing all appointments. Filters: ${JSON.stringify(filterDto)}`,
    );
    return this.appointmentsService.getAppointments(filterDto, user);
  }

  @Get('/:id')
  getAppointmentById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Appointment> {
    return this.appointmentsService.getAppointmentById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createAppointment(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @GetUser() user: User,
  ): Promise<Appointment> {
    this.logger.verbose(
      `User "${user.username}" creating new appointment. Data: ${JSON.stringify(
        createAppointmentDto,
      )}`,
    );
    return this.appointmentsService.createAppointment(
      createAppointmentDto,
      user,
    );
  }

  @Delete('/:id')
  deleteAppointmentById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.appointmentsService.deleteAppointmentById(id, user);
  }

  @Patch('/:id/status')
  updateAppointment(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', AppointmentStatusValidationPipe)
    appointmentStatus: AppointmentStatus,
    @GetUser() user: User,
  ): Promise<Appointment> {
    return this.appointmentsService.updateAppointmentStatus(
      id,
      appointmentStatus,
      user,
    );
  }
}
