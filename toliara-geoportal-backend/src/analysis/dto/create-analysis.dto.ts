import {
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateAnalysisDto {
  @IsString()
  parcelId: string;

  @IsNumber()
  ndvi: number;

  @IsOptional()
  @IsString()
  landCover?: string;

  @IsNumber()
  builtPercentage: number;

  @IsNumber()
  bareSoilPercentage: number;
}