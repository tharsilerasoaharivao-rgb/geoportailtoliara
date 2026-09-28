import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateParcelDto {

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsOptional()
  @IsNumber()
  superficie?: number;

  @IsOptional()
  @IsString()
  statut?: string;

  @IsNotEmpty()
  geom: object;

  @IsOptional()
  @IsString()
  fokontanyId?: string;
}