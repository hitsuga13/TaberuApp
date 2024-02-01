// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll(cond: any = {}): Promise<User[]> {
    return await this.userRepository.find(cond );
  }

  async findOne(cond: any = {}): Promise<User | undefined> {
    return await this.userRepository.findOne(cond);
  }

  async update(id: number, user: User): Promise<User | undefined> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
