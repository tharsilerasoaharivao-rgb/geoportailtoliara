import { Module } from '@nestjs/common';
import { FokontanyService } from './fokontany.service.js';
import { FokontanyController } from './fokontany.controller.js';

@Module({
  controllers: [FokontanyController],
  providers: [FokontanyService],
})
export class FokontanyModule {}
