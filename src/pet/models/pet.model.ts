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

  @ManyToOne(() => Breed, (breed) => breed.pets, { nullable: true })
  @Field(() => Breed, { nullable: true })
  breed?: Breed;
}
