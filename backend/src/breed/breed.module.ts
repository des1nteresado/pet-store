import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedService } from './breed.service';
import { BreedResolver } from './breed.resolver';
import { Breed } from './models/breed.model';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [BreedService, BreedResolver],
  exports: [BreedService],
})
export class BreedModule {}
