import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParcelsService } from './parcels.service.js';
import { ParcelsController } from './parcels.controller.js';

import { Parcel } from './entities/parcel.entity.js';
import { Fokontany } from '../fokontany/entities/fokontany.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Parcel,
      Fokontany,
    ]),
  ],

  controllers: [ParcelsController],

  providers: [ParcelsService],
})
export class ParcelsModule {}