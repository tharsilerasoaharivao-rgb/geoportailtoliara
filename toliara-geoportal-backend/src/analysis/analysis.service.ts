import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ParcelAnalysis } from './entities/parcel-analysis.entity.js';

@Injectable()
export class AnalysisService {
  constructor(
    @InjectRepository(ParcelAnalysis)
    private readonly repository: Repository<ParcelAnalysis>,
  ) {}

  classify(
    ndvi: number,
    built: number,
    bareSoil: number,
  ) {
    if (built >= 60) {
      return {
        classification: 'ZONE_URBANISEE',
        confidence: built / 100,
      };
    }

    if (bareSoil >= 60) {
      return {
        classification: 'SOL_NU',
        confidence: bareSoil / 100,
      };
    }

    if (ndvi >= 0.5) {
      return {
        classification: 'ZONE_VEGETALISEE',
        confidence: ndvi,
      };
    }

    return {
      classification: 'ZONE_MIXTE',
      confidence: 0.5,
    };
  }

  async createAnalysis(
    parcelId: string,
    ndvi: number,
    landCover: string,
    builtPercentage: number,
    bareSoilPercentage: number,
  ) {
    const result = this.classify(
      ndvi,
      builtPercentage,
      bareSoilPercentage,
    );

    const analysis = this.repository.create({
      parcelId,
      ndvi,
      landCover,
      builtPercentage,
      bareSoilPercentage,
      classification: result.classification,
      confidence: result.confidence,
    });

    return this.repository.save(analysis);
  }

  async findAll() {
    return this.repository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findByParcel(parcelId: string) {
    return this.repository.find({
      where: {
        parcelId,
      },
    });
  }
}