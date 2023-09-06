// src/user/user.dto.ts

import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly password: string;

  @IsEmail()
  readonly email: string;
}
