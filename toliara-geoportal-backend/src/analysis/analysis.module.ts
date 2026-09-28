import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnalysisService } from './analysis.service.js';
import { AnalysisController } from './analysis.controller.js';
import { ParcelAnalysis } from './entities/parcel-analysis.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParcelAnalysis]),
  ],
  controllers: [AnalysisController],
  providers: [AnalysisService],
})
export class AnalysisModule {}