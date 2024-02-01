import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from 'src/Restaurant/restaurant.module';
import { PreferencesModule } from 'src/Preferences/preferences.module';


@Module({
    imports: [TypeOrmModule.forFeature([User]),RestaurantModule,PreferencesModule,],
    controllers: [
        UserController,],
    providers: [
        UserService,],
})
export class UserModule { }
