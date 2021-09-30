import { useHistory } from "react-router";
import { useQuery, useMutation } from "@apollo/client";

import {
    Breed,
    GetBreedsData,
    GetPetsData,
    CreateBreedDto,
    Pet,
    CreatePetDto,
    UpdatePetDto,
    GetPetData,
} from "./../interfaces/index";
import { ROUTES } from "./../constants/index";
import {
    GET_BREEDS,
    GET_PETS,
    CREATE_BREED,
    CREATE_PET,
    DELETE_PET,
    GET_PET_BY_ID,
    UPDATE_PET,
} from "../queries";

export const useGetBreeds = (
    onCompleted?: ((data: GetBreedsData) => void) | undefined
) => useQuery<GetBreedsData>(GET_BREEDS, { onCompleted });

export const useGetPets = () => useQuery<GetPetsData>(GET_PETS);

export const useCreateBreed = (breed: CreateBreedDto) => {
    const history = useHistory();

    return useMutation<
        { createBreed: Breed },
        { createBreedDto: CreateBreedDto }
    >(CREATE_BREED, {
        variables: { createBreedDto: breed },
        onCompleted: () => history.push(ROUTES.breeds),
        refetchQueries: [{ query: GET_BREEDS }],
    });
};

export const useCreatePet = () => {
    const history = useHistory();

    return useMutation<{ createPet: Pet }, { createPetDto: CreatePetDto }>(
        CREATE_PET,
        {
            onCompleted: () => history.push(ROUTES.pets),
            refetchQueries: [{ query: GET_PETS }],
        }
    );
};

export const useDeletePet = () => {
    return useMutation<{ deletePet: string }, { id: number }>(DELETE_PET);
};

export const useUpdatePet = () => {
    const history = useHistory();

    return useMutation<{ updatePet: Pet }, { updatePetDto: UpdatePetDto }>(
        UPDATE_PET,
        {
            onCompleted: () => history.push(ROUTES.pets),
            refetchQueries: [{ query: GET_PETS }],
        }
    );
};

export const useGetPet = (
    id: number,
    onFetchedPet: (data: GetPetData) => void
) =>
    useQuery<GetPetData>(GET_PET_BY_ID, {
        variables: { id },
        onCompleted: onFetchedPet,
    });
