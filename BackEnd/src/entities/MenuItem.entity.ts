import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany,JoinTable,ManyToOne } from 'typeorm';
import { Preferences } from './preferences.entity';
import { Restaurant } from './restaurant.entity';

@Entity('menuitem')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  
  @ManyToOne(() => Restaurant, restaurant => restaurant.menuitem)
  restaurant: Restaurant;
  

  @ManyToMany(() => Preferences,(preference)=>preference.menuItems)
  preferences: Preferences[];
}
