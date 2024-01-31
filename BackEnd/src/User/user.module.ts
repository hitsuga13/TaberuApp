import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { User } from '../entities/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [
        UserController,],
    providers: [
        UserService,],
})
export class UserModule { }
