import { Module } from '@nestjs/common';
import { LayersService } from './layers.service.js';
import { LayersController } from './layers.controller.js';

@Module({
  controllers: [LayersController],
  providers: [LayersService],
})
export class LayersModule {}
