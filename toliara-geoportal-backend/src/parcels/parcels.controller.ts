import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

// Local stub of ParcelsService to resolve missing-module compile error.
// Replace this with the real service import when available.
export class ParcelsService {
  findNearby(arg0: number, arg1: number, arg2: number) {
    throw new Error('Method not implemented.');
  }
  create(dto: any) {
    return dto;
  }
  findAll() {
    return [];
  }
  findOne(id: string) {
    return { id };
  }
  remove(id: string) {
    return { deleted: id };
  }
}

// Temporary local definition until the DTO file is available/created.
type CreateParcelDto = {
  [key: string]: any;
};

@Controller('parcels')
export class ParcelsController {

  constructor(
    private readonly parcelsService: ParcelsService,
  ) {}


  @Post()
  create(@Body() dto: CreateParcelDto) {

    return this.parcelsService.create(dto);
  }


  @Get()
  findAll() {

    return this.parcelsService.findAll();
  }


  

  @Get('nearby/search')
findNearby(
  @Query('longitude') longitude: string,
  @Query('latitude') latitude: string,
  @Query('distance') distance?: string,
) {
  return this.parcelsService.findNearby(
    Number(longitude),
    Number(latitude),
    distance ? Number(distance) : 100,
  );
}

@Get(':id')
  findOne(@Param('id') id: string) {

    return this.parcelsService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {

    return this.parcelsService.remove(id);
  }
}