// menuitem.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuItem } from '../entities/menuitem.entity';

@Injectable()
export class MenuitemService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuItemRepository: Repository<MenuItem>,
  ) {}

  async create(menuItem: MenuItem): Promise<MenuItem> {
    return await this.menuItemRepository.save(menuItem);
  }

  async findAll(cond :any = {} ): Promise<MenuItem[]> {
    return await this.menuItemRepository.find(cond );
  }

  async findOne(cond: any = {} ): Promise<MenuItem | undefined> {
    return await this.menuItemRepository.findOne(cond );
  }

  async update(id: number, menuItem: MenuItem): Promise<MenuItem | undefined> {
    await this.menuItemRepository.update(id, menuItem);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.menuItemRepository.delete(id);
  }
}
