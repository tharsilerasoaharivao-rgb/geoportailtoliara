import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('parcel_analysis')
export class ParcelAnalysis {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  parcelId: string;

  @Column({
    type: 'float',
    nullable: true,
  })
  ndvi: number;

  @Column({
    nullable: true,
  })
  landCover: string;

  @Column({
    type: 'float',
    nullable: true,
  })
  builtPercentage: number;

  @Column({
    type: 'float',
    nullable: true,
  })
  bareSoilPercentage: number;

  @Column({
    nullable: true,
  })
  classification: string;

  @Column({
    type: 'float',
    nullable: true,
  })
  confidence: number;

  @CreateDateColumn()
  createdAt: Date;
}