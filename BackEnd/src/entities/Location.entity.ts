import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Restaurant } from './Restaurant.entity';
import { MenuItem } from './MenuItem.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Restaurant, restaurant => restaurant.locations)
  restaurant: Restaurant;

}
