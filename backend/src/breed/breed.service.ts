import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Breed } from './models/breed.model';
import { CreateBreedDto } from './dto/createBreed.dto';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,
  ) {}

  async createBreed(createBreedDto: CreateBreedDto): Promise<Breed> {
    const newBreed = this.breedRepository.create(createBreedDto);

    return this.breedRepository.save(newBreed);
  }

  async getAll(): Promise<Breed[]> {
    return this.breedRepository.find({ relations: ['pets'] });
  }

  async getOne(id: number): Promise<Breed> {
    return this.breedRepository.findOneOrFail(id);
  }
}
