// src/user/user.controller.ts

import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../model/user/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: User): Promise<User> {
    return this.userService.createUser(userDto);
  }

  @Delete(':email')
  async deleteUser(@Param('email') userId: string): Promise<User | null> {
    return this.userService.deleteUser(userId);
  }
  @Get(':email')
  async findOneByUsername(@Param('email') username: string): Promise<User> {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
