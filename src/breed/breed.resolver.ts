import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Breed } from './models/breed.model';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/createBreed.dto';

@Resolver(() => Breed)
export class BreedResolver {
  constructor(private breedService: BreedService) {}

  @Query(() => [Breed])
  breeds(): Promise<Breed[]> {
    return this.breedService.getAll();
  }

  @Query(() => Breed)
  breed(id: string): Promise<Breed> {
    return this.breedService.getOne(id);
  }

  @Mutation(() => Breed)
  createBreed(
    @Args('createBreedDto') createBreedDto: CreateBreedDto,
  ): Promise<Breed> {
    return this.breedService.createBreed(createBreedDto);
  }
}
