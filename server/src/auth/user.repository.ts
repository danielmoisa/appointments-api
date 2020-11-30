import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { email, password, username, role } = signUpDto;

    const user = new User();
    user.email = email;
    user.role = role;
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      // code for duplicated email
      if (error.code === '23505') {
        throw new ConflictException('Email address already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(signInDto: SignInDto): Promise<string> {
    const { email, password } = signInDto;
    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      return user.email;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
