import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';

import { AnalysisService } from './analysis.service.js';

import { CreateAnalysisDto } from './dto/create-analysis.dto.js';

@Controller('analysis')
export class AnalysisController {

  constructor(
    private readonly analysisService: AnalysisService,
  ) {}


  @Post()
  create(
    @Body() dto: CreateAnalysisDto,
  ) {

    return this.analysisService.createAnalysis(
      dto.parcelId,
      dto.ndvi,
      dto.landCover || '',
      dto.builtPercentage,
      dto.bareSoilPercentage,
    );
  }


  @Get()
  findAll() {

    return this.analysisService.findAll();
  }


  @Get('parcel/:parcelId')
  findByParcel(
    @Param('parcelId') parcelId: string,
  ) {

    return this.analysisService.findByParcel(parcelId);
  }
}