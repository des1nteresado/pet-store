import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Breed } from 'src/breed/models/breed.model';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  breedId: number;

  @ManyToOne(() => Breed, (breed) => breed.pets)
  @Field(() => Breed)
  breed: Breed;
}
