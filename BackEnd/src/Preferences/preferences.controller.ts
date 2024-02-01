// preferences.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { Preferences } from '../entities/preferences.entity';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  create(@Body() preferences: Preferences): Promise<Preferences> {
    return this.preferencesService.create(preferences);
  }

  @Get()
  findAll(): Promise<Preferences[]> {
    return this.preferencesService.findAll({relations:["user"]});
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Preferences | undefined> {
    return this.preferencesService.findOne({where:{id:+id}});
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() preferences: Preferences): Promise<Preferences | undefined> {
    return this.preferencesService.update(+id, preferences);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.preferencesService.remove(+id);
  }
}
