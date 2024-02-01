import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { MenuItem } from './menuItem.entity';
import { User } from './user.entity';

@Entity('preferences')
export class Preferences {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @ManyToMany(() => User, user => user.preferences)
  @JoinTable({
    name: 'preference_user', // Custom join table name
    joinColumn: {
      name: 'preference_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: User[];

  @ManyToMany(() => MenuItem, menuitem => menuitem.preferences)
  @JoinTable({
    name: 'preferences_menuitems', // Custom join table name
    joinColumn: {
      name: 'preference_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'menuitem_id',
      referencedColumnName: 'id',
    },
  })
  menuItems: MenuItem[];
}
