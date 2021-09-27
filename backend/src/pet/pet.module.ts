import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { Pet } from './models/pet.model';
import { BreedModule } from 'src/breed/breed.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), BreedModule],
  providers: [PetService, PetResolver],
})
export class PetModule {}
