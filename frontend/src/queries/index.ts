import { useHistory } from "react-router";
import { gql, useQuery, useMutation } from "@apollo/client";

import {
    Breed,
    GetBreedsData,
    GetPetsData,
    CreateBreedDto,
} from "./../interfaces/index";
import { ROUTES } from "./../constants/index";

export const useGetBreeds = () =>
    useQuery<GetBreedsData>(gql`
        query {
            breeds {
                id
                name
                country
                lifespan
                # pets {}
            }
        }
    `);

export const useGetPets = () =>
    useQuery<GetPetsData>(gql`
        query {
            pets {
                id
                name
                # breed {}
            }
        }
    `);

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
        }
    );
};
