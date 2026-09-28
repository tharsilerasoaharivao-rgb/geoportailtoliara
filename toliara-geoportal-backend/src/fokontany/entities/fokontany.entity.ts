import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Parcel } from '../../parcels/entities/parcel.entity.js';

@Entity('fokontany')
export class Fokontany {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  // 🗺️ Géométrie du Fokontany
  @Column({
    type: 'geometry',
    spatialFeatureType: 'MultiPolygon',
    srid: 4326,
  })
  geom: object;

  // 🟫 Un Fokontany contient plusieurs parcelles
  @OneToMany(
    () => Parcel,
    (parcel) => parcel.fokontany,
  )
  parcels: Parcel[];
}