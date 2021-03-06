import { gql } from "@apollo/client";

export const GET_BREEDS = gql`
    query {
        breeds {
            id
            name
            country
            lifespan
            # pets {}
        }
    }
`;

export const CREATE_BREED = gql`
    mutation createBreed($createBreedDto: CreateBreedDto!) {
        createBreed(createBreedDto: $createBreedDto) {
            name
            country
            lifespan
        }
    }
`;

export const GET_PETS = gql`
    query {
        pets {
            id
            name
            breed {
                name
                country
                lifespan
            }
        }
    }
`;

export const GET_PET_BY_ID = gql`
    query pet($id: Int!) {
        pet(id: $id) {
            id
            name
            breed {
                id
                name
                country
                lifespan
            }
        }
    }
`;

export const CREATE_PET = gql`
    mutation createPet($createPetDto: CreatePetDto!) {
        createPet(createPetDto: $createPetDto) {
            name
            breedId
        }
    }
`;

export const UPDATE_PET = gql`
    mutation updatePet($updatePetDto: UpdatePetDto!) {
        updatePet(updatePetDto: $updatePetDto) {
            id
            name
            breedId
        }
    }
`;

export const DELETE_PET = gql`
    mutation deletePet($id: Int!) {
        deletePet(id: $id)
    }
`;
