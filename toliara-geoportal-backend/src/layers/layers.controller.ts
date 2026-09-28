import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LayersService } from './layers.service.js';
import { CreateLayerDto } from './dto/create-layer.dto.js';
import { UpdateLayerDto } from './dto/update-layer.dto.js';

@Controller('layers')
export class LayersController {
  constructor(private readonly layersService: LayersService) {}

  @Post()
  create(@Body() createLayerDto: CreateLayerDto) {
    return this.layersService.create(createLayerDto);
  }

  @Get()
  findAll() {
    return this.layersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLayerDto: UpdateLayerDto) {
    return this.layersService.update(+id, updateLayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.layersService.remove(+id);
  }
}
