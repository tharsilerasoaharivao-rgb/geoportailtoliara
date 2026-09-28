import { PartialType } from '@nestjs/swagger';
import { CreateFokontanyDto } from './create-fokontany.dto.js';

export class UpdateFokontanyDto extends PartialType(CreateFokontanyDto) {}
