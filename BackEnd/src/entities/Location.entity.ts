import { Entity, PrimaryGeneratedColumn,JoinColumn, OneToOne,Column, ManyToOne, OneToMany } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { MenuItem } from './menuItem.entity';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Restaurant, (restaurant) => restaurant.locations)
  @JoinColumn()
  restaurant: Restaurant;

}
