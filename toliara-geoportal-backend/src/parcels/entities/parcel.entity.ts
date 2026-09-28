import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Fokontany } from '../../fokontany/entities/fokontany.entity.js';

// Import avoided to prevent TS resolution error in some setups; use require at runtime in decorator below

@Entity('parcels')
export class Parcel {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  code: string;

  @Column({
    type: 'float',
    nullable: true,
  })
  superficie: number;

  @Column({
    nullable: true,
  })
  statut: string;

  // 🗺️ Géométrie spatiale
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Polygon',
    srid: 4326,
  })
  geom: object;

  // 🏘️ Relation avec Fokontany
  @ManyToOne(
    // use require so TypeScript won't try to resolve the import at compile time here
    () => require('../../fokontany/entities/fokontany.entity').Fokontany,
    (fokontany: any) => fokontany.parcels,
    {
      nullable: true,
    },
  )
  @JoinColumn({
    name: 'fokontany_id',
  })
  fokontany: Fokontany;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}