// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../model/user/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(userDto: User): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async deleteUser(userId: string): Promise<User | null> {
    return this.userModel.findByIdAndRemove(userId).exec();
  }

  async findOneByUsername(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
