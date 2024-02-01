// location.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from '../entities/location.entity';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() location: Location): Promise<Location> {
    return this.locationService.create(location);
  }

  @Get()
  findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Location | undefined> {
    return this.locationService.findOne({where:{ id:+id}});
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() location: Location): Promise<Location | undefined> {
    return this.locationService.update(+id, location);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.locationService.remove(+id);
  }
}
