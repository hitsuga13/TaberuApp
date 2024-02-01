// user.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { RestaurantService } from '../Restaurant/restaurant.service'; // Import the RestaurantService
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly restaurantService: RestaurantService, // Add RestaurantService
  ) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll({ relations: ['preferences'] });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findOne({ where: { id: +id } });
  }

  @Get('restaurants/:id') // New endpoint to get restaurants based on user preferences
  async getRestaurantsByUserId(@Param('id') id: string): Promise<any> {
    try {
      const user = await this.userService.findOne({ where: { id: +id }, relations: ['preferences'] });

      if (!user) {
        return { error: 'User not found' };
      }

      const preferencesIds = user.preferences.map((preference) => preference.id);
      const restaurants = await this.restaurantService.findByPreferences(preferencesIds);

      return { restaurants };
    } catch (error) {
      console.error(error);
      return { error: 'Internal Server Error' };
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User): Promise<User | undefined> {
    return this.userService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);
  }
}
