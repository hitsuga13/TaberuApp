import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { MenuItem } from './MenuItem.entity';
import { User } from './User.entity';

@Entity()
export class Preferences {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToMany(() => MenuItem)
  @JoinTable()
  menuItems: MenuItem[];
}
