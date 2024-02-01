// review.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';
import { User } from './user.entity';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  review: string;

  @Column()
  date: Date;

  // Many reviews belong to one restaurant
  @ManyToOne(() => Restaurant, restaurant => restaurant.reviewlist)
  restaurant: Restaurant;

  @ManyToOne(() => User, user => user.review)
  user: User;
}
