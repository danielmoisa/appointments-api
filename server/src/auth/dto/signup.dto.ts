import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRole } from '../user-role.enum';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password must contain a uppercase letter, a number and a special character',
  })
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  role: UserRole;
}
