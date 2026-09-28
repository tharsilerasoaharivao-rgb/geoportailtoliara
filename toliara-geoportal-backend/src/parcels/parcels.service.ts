import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Parcel } from './entities/parcel.entity.js';
import { CreateParcelDto } from './dto/create-parcel.dto.js';

@Injectable()
export class ParcelsService {
  constructor(
    @InjectRepository(Parcel)
    private readonly repository: Repository<Parcel>,
  ) {}

  async create(dto: CreateParcelDto) {
    const parcel = this.repository.create(dto);

    return this.repository.save(parcel);
  }

  async findAll() {
    return this.repository.find({
      relations: {
        fokontany: true,
      },
    });
  }

  async findOne(id: string) {
    const parcel = await this.repository.findOne({
      where: { id },
      relations: {
        fokontany: true,
      },
    });

    if (!parcel) {
      throw new NotFoundException(`Parcelle ${id} introuvable`);
    }

    return parcel;
  }

  async findNearby(
    longitude: number,
    latitude: number,
    distance = 100,
  ) {
    return this.repository.query(
      `
      SELECT
        id,
        code,
        superficie,
        statut,
        ST_AsGeoJSON(geom) AS geometry,

        ST_Distance(
          geom::geography,
          ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography
        ) AS distance

      FROM parcels

      WHERE geom IS NOT NULL
      AND ST_DWithin(
        geom::geography,
        ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
        $3
      )

      ORDER BY distance ASC
      `,
      [longitude, latitude, distance],
    );
  }

  async remove(id: string) {
    const parcel = await this.findOne(id);

    return this.repository.remove(parcel);
  }
}