import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pet } from './models/pet.model';
import { CreatePetDto } from './dto/createPet.dto';
import { BreedService } from '../breed/breed.service';
import { Breed } from 'src/breed/models/breed.model';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
    private breedService: BreedService,
  ) {}

  async createPet(createPetDto: CreatePetDto): Promise<Pet> {
    const newPet = this.petRepository.create(createPetDto);

    return this.petRepository.save(newPet);
  }

  async getAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async getBreed(breedId: number): Promise<Breed> {
    return this.breedService.getOne(breedId);
  }
}
