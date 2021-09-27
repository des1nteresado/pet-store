import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreatePetDto {
  @IsString()
  @Field()
  name: string;

  @IsNumber()
  @Field(() => Int)
  breedId: number;
}
