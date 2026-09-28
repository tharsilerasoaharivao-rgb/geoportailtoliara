import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParcelsModule } from './parcels/parcels.module.js';
import { AnalysisModule } from './analysis/analysis.module.js';

import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [

    // ==========================================
    // CONFIGURATION
    // ==========================================

    ConfigModule.forRoot({
      isGlobal: true,
    }),


    // ==========================================
    // BASE DE DONNÉES POSTGRESQL
    // ==========================================

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (config: ConfigService) => ({
        type: 'postgres',

        host: config.get<string>('DB_HOST'),

        port: Number(
          config.get<string>('DB_PORT')
        ),

        username: config.get<string>(
          'DB_USERNAME'
        ),

        password: config.get<string>(
          'DB_PASSWORD'
        ),

        database: config.get<string>(
          'DB_DATABASE'
        ),

        // Charge automatiquement les entités
        autoLoadEntities: true,

        // Pour le développement uniquement
        synchronize: true,
      }),
    }),


    // ==========================================
    // MODULES DE L'APPLICATION
    // ==========================================

    ParcelsModule,

    AnalysisModule,


    // ==========================================
    // AUTHENTIFICATION
    // ==========================================

    UsersModule,

    AuthModule,
  ],
})
export class AppModule {}