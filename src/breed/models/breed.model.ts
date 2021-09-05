import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Pet } from 'src/pet/models/pet.model';

@Entity()
@ObjectType()
export class Breed {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  country?: string;

  @Column()
  @Field(() => Int, { description: 'Approximate life expectancy' })
  lifespan: number;

  @OneToMany(() => Pet, (pet) => pet.breed, { nullable: true })
  @Field(() => [Pet], { nullable: true })
  pets?: Pet[];
}
