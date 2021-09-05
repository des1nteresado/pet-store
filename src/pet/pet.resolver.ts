import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Pet } from './models/pet.model';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/createPet.dto';
import { Breed } from 'src/breed/models/breed.model';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private petService: PetService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petService.getAll();
  }

  @ResolveField(() => Breed)
  breed(@Parent() pet: Pet): Promise<Breed> {
    return this.petService.getBreed(pet.breedId);
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet> {
    return this.petService.createPet(createPetDto);
  }
}
