// restaurant.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  findByPreferences1(preferencesIds: number[]) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async create(restaurant: Restaurant): Promise<Restaurant> {
    return await this.restaurantRepository.save(restaurant);
  }

  async findAll(cond :any = {} ): Promise<Restaurant[]> {
    return await this.restaurantRepository.find(cond );
  }

  async findOne(cond :any = {}): Promise<Restaurant | undefined> {
    return await this.restaurantRepository.findOne(cond);
  }

  async findByPreferences(preferencesIds: number[]): Promise<Restaurant[]> {
    return await this.restaurantRepository
      .createQueryBuilder('restaurant')
       .leftJoinAndSelect('restaurant.menuitem', 'menuitem')
      .leftJoinAndSelect('menuitem.preferences', 'menuItemPreference')
      .where('menuItemPreference.id IN (:...preferencesIds)', { preferencesIds })
      .getMany();

  }

  async update(id: number, restaurant: Restaurant): Promise<Restaurant | undefined> {
    await this.restaurantRepository.update(id, restaurant);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.restaurantRepository.delete(id);
  }
}
