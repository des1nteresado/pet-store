import { useHistory } from "react-router";
import { gql, useQuery, useMutation } from "@apollo/client";

import {
    Breed,
    GetBreedsData,
    GetPetsData,
    CreateBreedDto,
    Pet,
    CreatePetDto,
} from "./../interfaces/index";
import { ROUTES } from "./../constants/index";

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

export const useGetBreeds = (
    onCompleted?: ((data: GetBreedsData) => void) | undefined
) => useQuery<GetBreedsData>(GET_BREEDS, { onCompleted });

export const useGetPets = () => useQuery<GetPetsData>(GET_PETS);

export const useCreateBreed = (breed: CreateBreedDto) => {
    const history = useHistory();

    return useMutation<
        { createBreed: Breed },
        { createBreedDto: CreateBreedDto }
    >(
        gql`
            mutation createBreed($createBreedDto: CreateBreedDto!) {
                createBreed(createBreedDto: $createBreedDto) {
                    name
                    country
                    lifespan
                }
            }
        `,
        {
            variables: { createBreedDto: breed },
            onCompleted: () => history.push(ROUTES.breeds),
            refetchQueries: [{ query: GET_BREEDS }],
        }
    );
};

export const useCreatePet = () => {
    const history = useHistory();

    return useMutation<{ createPet: Pet }, { createPetDto: CreatePetDto }>(
        gql`
            mutation createPet($createPetDto: CreatePetDto!) {
                createPet(createPetDto: $createPetDto) {
                    name
                    breedId
                }
            }
        `,
        {
            onCompleted: () => history.push(ROUTES.pets),
            refetchQueries: [{ query: GET_PETS }],
        }
    );
};

export const useDeletePet = () => {
    return useMutation<{ deletePet: string }, { id: number }>(
        gql`
            mutation deletePet($id: Int!) {
                deletePet(id: $id)
            }
        `
    );
};
