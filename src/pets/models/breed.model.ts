import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Breed {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  country?: string;

  @Field((type) => Int, { description: 'Approximate life expectancy' })
  lifespan: number;
}
