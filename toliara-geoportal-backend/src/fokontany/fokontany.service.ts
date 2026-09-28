import { Injectable } from '@nestjs/common';
import { CreateFokontanyDto } from './dto/create-fokontany.dto.js';
import { UpdateFokontanyDto } from './dto/update-fokontany.dto.js';

@Injectable()
export class FokontanyService {
  create(createFokontanyDto: CreateFokontanyDto) {
    return 'This action adds a new fokontany';
  }

  findAll() {
    return `This action returns all fokontany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fokontany`;
  }

  update(id: number, updateFokontanyDto: UpdateFokontanyDto) {
    return `This action updates a #${id} fokontany`;
  }

  remove(id: number) {
    return `This action removes a #${id} fokontany`;
  }
}
