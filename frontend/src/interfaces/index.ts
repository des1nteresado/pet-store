export interface Pet {
    id: number;
    name: string;
    breed: Breed;
}

export interface Breed {
    id: number;
    name: string;
    country?: string;
    lifespan: number;
    pets?: Pet[];
}

export interface GetBreedsData {
    breeds: Breed[];
}

export interface GetPetsData {
    pets: Pet[];
}

export interface CreateBreedDto {
    name?: string;
    country?: string;
    lifespan?: number;
}

export interface CreatePetDto {
    name?: string;
    breedId?: number;
}
