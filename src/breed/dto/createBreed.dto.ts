import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateBreedDto {
  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  country?: string;

  @IsNumber()
  @Field(() => Int)
  lifespan: number;
}
