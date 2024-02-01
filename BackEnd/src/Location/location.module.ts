import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '../entities/location.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Location])],
    controllers: [
        LocationController,],
    providers: [
        LocationService,],
})
export class LocationModule { }
