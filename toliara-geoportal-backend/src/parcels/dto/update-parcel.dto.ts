import { PartialType } from '@nestjs/swagger';
import { CreateParcelDto } from './create-parcel.dto.js';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {}
