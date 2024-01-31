import { UserModule } from './User/user.module';
import { RestaurantModule } from './Restaurant/restaurant.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    UserModule,
    RestaurantModule, TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
