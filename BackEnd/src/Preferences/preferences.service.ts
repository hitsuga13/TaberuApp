// Preferencess.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Preferences } from '../entities/Preferences.entity';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectRepository(Preferences)
    private readonly PreferencesRepository: Repository<Preferences>,
  ) {}

  async create(Preferences: Preferences): Promise<Preferences> {
    return await this.PreferencesRepository.save(Preferences);
  }

  async findAll(cond :any = {} ): Promise<Preferences[]> {
    return await this.PreferencesRepository.find(cond );
  }

  async findOne(cond: any = {} ): Promise<Preferences | undefined> {
    return await this.PreferencesRepository.findOne(cond);
  }

  async update(id: number, Preferences: Preferences): Promise<Preferences | undefined> {
    await this.PreferencesRepository.update(id, Preferences);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.PreferencesRepository.delete(id);
  }
}
