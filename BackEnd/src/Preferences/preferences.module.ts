import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preferences } from '../entities/preferences.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Preferences])],
    controllers: [
        PreferencesController,],
    providers: [
        PreferencesService,],
        exports:[PreferencesService]
})
export class PreferencesModule { }
