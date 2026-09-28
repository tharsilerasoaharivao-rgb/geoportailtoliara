import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller.js';

import { AuthService } from './auth.service.js';

import { UsersModule } from '../users/users.module.js';

@Module({

  imports: [

    UsersModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET || 'TOliaraSecretChangeMe',

      signOptions: {
        expiresIn: '1d',
      },
    }),

  ],

  controllers: [
    AuthController,
  ],

  providers: [
    AuthService,
  ],

  exports: [
    AuthService,
  ],
})
export class AuthModule {}