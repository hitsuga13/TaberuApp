import { LocationModule } from './Location/location.module';
import { MenuitemService } from './MenuItem/menuitem.service';
import { MenuitemModule } from './MenuItem/menuitem.module';
import { PreferencesModule } from './Preferences/preferences.module';
import { UserModule } from './User/user.module';
import { RestaurantModule } from './Restaurant/restaurant.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeOrmConfig from './typeorm.config';
import { UserController } from './User/user.controller';
import { RestaurantController } from './Restaurant/restaurant.controller';
import { PreferencesController } from './Preferences/preferences.controller';
import { MenuitemController } from './MenuItem/menuitem.controller';
import { LocationController } from './Location/location.controller';
import { LocationService } from './Location/location.service';
import { PreferencesService } from './Preferences/preferences.service';
import { RestaurantService } from './Restaurant/restaurant.service';
import { UserService } from './User/user.service';


@Module({
  imports: [
    LocationModule,
    MenuitemModule,
    PreferencesModule,
    UserModule,
    RestaurantModule, TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [ ],
  providers: [
 ],
})
export class AppModule { }
