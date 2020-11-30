import { BadRequestException, PipeTransform } from '@nestjs/common';
import { AppointmentStatus } from '../appointment-status.enum';

export class AppointmentStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    AppointmentStatus.OPEN,
    AppointmentStatus.IN_PROGRESS,
    AppointmentStatus.OPEN,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
