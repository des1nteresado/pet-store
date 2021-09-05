import { Field, InputType } from '@nestjs/graphql';
import { IsNumberString, IsString } from 'class-validator';

@InputType()
export class CreatePetDto {
  @IsString()
  @Field()
  name: string;

  @IsNumberString()
  @Field({ nullable: true })
  breed?: string;
}
