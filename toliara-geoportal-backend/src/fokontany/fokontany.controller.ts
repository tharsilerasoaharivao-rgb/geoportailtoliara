import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FokontanyService } from './fokontany.service.js';
import { CreateFokontanyDto } from './dto/create-fokontany.dto.js';
import { UpdateFokontanyDto } from './dto/update-fokontany.dto.js';

@Controller('fokontany')
export class FokontanyController {
  constructor(private readonly fokontanyService: FokontanyService) {}

  @Post()
  create(@Body() createFokontanyDto: CreateFokontanyDto) {
    return this.fokontanyService.create(createFokontanyDto);
  }

  @Get()
  findAll() {
    return this.fokontanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fokontanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFokontanyDto: UpdateFokontanyDto) {
    return this.fokontanyService.update(+id, updateFokontanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fokontanyService.remove(+id);
  }
}
