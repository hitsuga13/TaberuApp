// restaurant.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../entities/restaurant.entity';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  create(@Body() restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantService.create(restaurant);
  }

  @Get()
  findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll({relations:["menuitem","reviewlist.user"]});
  }
  @Post('bypreferences')
  async findByPreferences(@Body() preferencesDto: any) {
    const { preferencesIds } = preferencesDto;
    
    const restaurants = await this.restaurantService.findByPreferences(preferencesIds);

    return { restaurants };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() restaurant: Restaurant): Promise<Restaurant | undefined> {
    return this.restaurantService.update(+id, restaurant);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.restaurantService.remove(+id);
  }
}
