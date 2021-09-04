import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateBreedDto {
  @Field()
  name: string;

  @Field({ nullable: true })
  country?: string;

  @Field(() => Int)
  lifespan: number;
}
