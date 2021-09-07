import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class UpdatePetDto {
  @IsNumber()
  @Field(() => Int)
  id: number;

  @IsString()
  @Field()
  name: string;

  @IsNumber()
  @Field(() => Int)
  breedId: number;
}
