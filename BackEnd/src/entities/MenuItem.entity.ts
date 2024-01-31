import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany,JoinTable,ManyToOne } from 'typeorm';
import { Preferences } from './Preferences.entity';
import { Restaurant } from './Restaurant.entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  
  @ManyToOne(() => Restaurant, restaurant => restaurant.menuitem)
  restaurant: Restaurant;
  

  @ManyToMany(() => Preferences)
  preferences: Preferences[];
}
