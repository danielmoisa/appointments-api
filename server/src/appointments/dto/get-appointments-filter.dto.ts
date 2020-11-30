import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { AppointmentStatus } from '../appointment-status.enum';

export class GetAppointmentsFilterDto {
  @IsOptional()
  @IsIn([
    AppointmentStatus.OPEN,
    AppointmentStatus.IN_PROGRESS,
    AppointmentStatus.DONE,
  ])
  status: AppointmentStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
