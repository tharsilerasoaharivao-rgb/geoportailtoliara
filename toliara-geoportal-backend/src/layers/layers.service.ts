import { Injectable } from '@nestjs/common';
import { CreateLayerDto } from './dto/create-layer.dto.js';
import { UpdateLayerDto } from './dto/update-layer.dto.js';

@Injectable()
export class LayersService {
  create(createLayerDto: CreateLayerDto) {
    return 'This action adds a new layer';
  }

  findAll() {
    return `This action returns all layers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} layer`;
  }

  update(id: number, updateLayerDto: UpdateLayerDto) {
    return `This action updates a #${id} layer`;
  }

  remove(id: number) {
    return `This action removes a #${id} layer`;
  }
}
