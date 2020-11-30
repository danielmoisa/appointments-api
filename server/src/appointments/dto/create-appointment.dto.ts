import { title } from 'process';

import { IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
