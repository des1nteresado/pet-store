import { gql, useQuery } from "@apollo/client";

export const useGetAllBreeds = () =>
    useQuery(gql`
        query {
            breeds {
                id
                name
                country
                lifespan
            }
        }
    `);
