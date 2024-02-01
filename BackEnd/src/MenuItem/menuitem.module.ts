import { MenuitemController } from './menuitem.controller';
import { MenuitemService } from './menuitem.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItem } from '../entities/menuItem.entity';


@Module({
    imports: [TypeOrmModule.forFeature([MenuItem])],
    controllers: [
        MenuitemController,],
    providers: [
        MenuitemService,],
        // exports
})
export class MenuitemModule { }
