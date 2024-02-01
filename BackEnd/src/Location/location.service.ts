// location.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(location: Location): Promise<Location> {
    return await this.locationRepository.save(location);
  }

  async findAll(cond :any = {} ): Promise<Location[]> {
    return await this.locationRepository.find(cond );
  }

  async findOne(cond :any = {} ): Promise<Location | undefined> {
    return await this.locationRepository.findOne(cond);
  }

  async update(id: number, location: Location): Promise<Location | undefined> {
    await this.locationRepository.update(id, location);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}
