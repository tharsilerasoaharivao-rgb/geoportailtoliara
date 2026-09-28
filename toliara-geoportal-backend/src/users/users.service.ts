import {
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {

    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async createUser(
    email: string,
    hashedPassword: string,
  ): Promise<User> {

    const existingUser = await this.findByEmail(email);

    if (existingUser) {
      throw new ConflictException(
        'Cette adresse e-mail existe déjà.',
      );
    }

    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
      role: 'user',
      isActive: true,
    });

    return this.usersRepository.save(user);
  }
}