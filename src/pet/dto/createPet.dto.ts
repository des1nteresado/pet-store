import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePetDto {
  @Field()
  name: string;

  @Field({ nullable: true })
  breed?: string;
}
