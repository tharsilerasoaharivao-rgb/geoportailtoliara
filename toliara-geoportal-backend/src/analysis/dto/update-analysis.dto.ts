import { PartialType } from '@nestjs/swagger';
import { CreateAnalysisDto } from './create-analysis.dto.js';

export class UpdateAnalysisDto extends PartialType(CreateAnalysisDto) {}
