import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Preferences } from './preferences.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @ManyToMany(() => Preferences, (preference)=>preference.users)
    preferences: Preferences[];
}

//install tyupero mand mysal adapter 