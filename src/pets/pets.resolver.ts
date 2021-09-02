import { Query, Resolver } from '@nestjs/graphql';

import { Pet } from './models/pet.model';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.getAll();
  }
}
