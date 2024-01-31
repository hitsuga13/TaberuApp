import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Preferences } from './Preferences.entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @ManyToMany(() => Preferences)
  @JoinTable()
  preferences: Preferences[];
}
