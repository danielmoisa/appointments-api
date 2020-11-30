import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  sendMail(): any {
    return this.mailService.example();
  }

  @Get('template')
  sendTemplate(): any {
    return this.mailService.example2();
  }
}
