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

@Module({
  imports: [
    LocationModule,
    MenuitemModule,
    PreferencesModule,
    UserModule,
    RestaurantModule, TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [
    MenuitemService, AppService],
})
export class AppModule { }
