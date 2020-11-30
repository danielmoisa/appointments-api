import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AppointmentsModule,
    AuthModule,
    MailModule,
  ],
})
export class AppModule {}
