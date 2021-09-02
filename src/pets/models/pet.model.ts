import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Breed } from './breed.model';

@ObjectType()
export class Pet {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Breed)
  breed?: Breed;
}
