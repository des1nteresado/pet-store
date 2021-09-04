import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pet } from './models/pet.model';
import { CreatePetDto } from './dto/createPet.dto';
import { BreedService } from '../breed/breed.service';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
    private breedService: BreedService,
  ) {}

  async createPet(createPetDto: CreatePetDto): Promise<Pet> {
    const breed = await this.breedService.getOne(createPetDto.breed);
    const newPet = this.petRepository.create({ ...createPetDto, breed });

    return this.petRepository.save(newPet);
  }

  async getAll(): Promise<Pet[]> {
    return this.petRepository.find({ relations: ['breed'] });
  }
}
