// menuitem.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { MenuitemService } from './menuitem.service';
import { MenuItem } from '../entities/menuItem.entity';

@Controller('menuitems')
export class MenuitemController {
  constructor(private readonly menuitemService: MenuitemService) {}

  @Post()
  create(@Body() menuItem: MenuItem): Promise<MenuItem> {
    return this.menuitemService.create(menuItem);
  }

  @Get()
  findAll(): Promise<MenuItem[]> {
    return this.menuitemService.findAll({relations:["restaurant"]});
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MenuItem | undefined> {
    return this.menuitemService.findOne({where:{ id:+id}});
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() menuItem: MenuItem): Promise<MenuItem | undefined> {
    return this.menuitemService.update(+id, menuItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.menuitemService.remove(+id);
  }
}
