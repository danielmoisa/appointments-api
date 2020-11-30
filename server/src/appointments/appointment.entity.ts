import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AppointmentStatus } from './appointment-status.enum';

@Entity()
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: AppointmentStatus;

  @ManyToOne((type) => User, (user) => user.appointments, { eager: false })
  user: User;

  @Column()
  userId: number;
}
