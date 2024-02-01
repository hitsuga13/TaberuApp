import { Entity, PrimaryGeneratedColumn, Column, OneToMany,OneToOne } from 'typeorm';
import { Location } from './location.entity';
import { MenuItem } from './menuItem.entity';
import { Review } from './review.entity';

@Entity('restaurant') 
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

  @OneToMany(() => MenuItem, menuItem => menuItem.restaurant)
  menuitem: MenuItem[];
  
  @OneToOne(() => Location, (location) => location.restaurant)
  locations: Location;

  @OneToMany(() => Review, review => review.restaurant)
  reviewlist: Review;
}
