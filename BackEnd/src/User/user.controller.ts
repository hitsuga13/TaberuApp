// user.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll({relations:["preference"]});
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findOne({where:{id:+id}});
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
