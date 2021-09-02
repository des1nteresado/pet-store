import { Injectable } from '@nestjs/common';

import { Pet } from './models/pet.model';

@Injectable()
export class PetsService {
  async getAll(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = 1;
    pet.name = 'Kolobok';

    pet.breed = {
      id: 1,
      name: 'Corgi',
      country: 'England',
      lifespan: 13,
    };

    return [pet];
  }
}
