import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable , OneToMany} from 'typeorm';
import { Preferences } from './preferences.entity';
import { Review } from './review.entity';

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

  @OneToMany(() => Review, (review)=>review.user)
  review: Review[];
}

//install tyupero mand mysal adapter 