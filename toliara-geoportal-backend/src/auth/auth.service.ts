import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,

    private readonly jwtService: JwtService,
  ) {}

  async register(
    email: string,
    password: string,
  ) {

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await this.usersService.createUser(
        email,
        hashedPassword,
      );

    return {
      message: 'Compte créé avec succès.',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }


  async login(
    email: string,
    password: string,
  ) {

    const user =
      await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException(
        'Email ou mot de passe incorrect.',
      );
    }

    if (!user.isActive) {
      throw new UnauthorizedException(
        'Ce compte est désactivé.',
      );
    }

    const passwordValid =
      await bcrypt.compare(
        password,
        user.password,
      );

    if (!passwordValid) {
      throw new UnauthorizedException(
        'Email ou mot de passe incorrect.',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken =
      await this.jwtService.signAsync(payload);

    return {
      message: 'Connexion réussie.',

      access_token: accessToken,

      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}