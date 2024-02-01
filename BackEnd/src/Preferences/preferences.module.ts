import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preferences } from '../entities/Preferences.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Preferences])],
    controllers: [
        PreferencesController,],
    providers: [
        PreferencesService,],
})
export class PreferencesModule { }
