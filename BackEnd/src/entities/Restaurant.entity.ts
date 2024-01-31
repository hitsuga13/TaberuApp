import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Location } from './Location.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @OneToMany(() => Location, location => location.restaurant)
  locations: Location[];
}
