import { UpdatePetDto } from './dto/updatePet.dto';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Int,
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

  @Query(() => Pet)
  pet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petService.getOne(id);
  }

  @ResolveField(() => Breed)
  breed(@Parent() pet: Pet): Promise<Breed> {
    return this.petService.getBreed(pet.breedId);
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet> {
    return this.petService.createPet(createPetDto);
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetDto') updatePetDto: UpdatePetDto): Promise<Pet> {
    return this.petService.updatePet(updatePetDto);
  }

  @Mutation(() => String)
  deletePet(@Args('id', { type: () => Int }) id: number): Promise<string> {
    return this.petService.deletePet(id);
  }
}
