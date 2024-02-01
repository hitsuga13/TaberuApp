import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from '../entities/restaurant.entity';
import { Location } from '../entities/location.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant,Location])],
    controllers: [
        RestaurantController,],
    providers: [
        RestaurantService,],
        exports:[RestaurantService]
})
export class RestaurantModule { }
