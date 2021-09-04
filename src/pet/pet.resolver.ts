import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Pet } from './models/pet.model';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/createPet.dto';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private petService: PetService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petService.getAll();
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet> {
    return this.petService.createPet(createPetDto);
  }
}
