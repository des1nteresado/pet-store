import React from "react";
import { useHistory } from "react-router";
import { ROUTES } from "../constants";

import { useDeletePet, useGetPets } from "../hooks";
import { GET_PETS } from "../queries";

const PetsList: React.FC = () => {
    const history = useHistory();
    const {
        loading: isPetLoading,
        error,
        data: { pets = [] } = {},
    } = useGetPets();
    const [deletePet, { loading, error: createPetError }] = useDeletePet();

    if (isPetLoading || loading) return <p>Loading...</p>;
    if (error || createPetError) return <p>Error :(</p>;

    const handleDeletePet = (id: number) => {
        deletePet({
            variables: { id },
            refetchQueries: [{ query: GET_PETS }],
        });
    };

    return (
        <div className="petsList">
            <h2>Pets list</h2>
            {pets.length ? (
                pets.map(({ id, name, breed }) => (
                    <div className="petsContainer">
                        <p>Name: {name}</p>
                        <p>Info about breed:</p>
                        <p>
                            Breed: {breed.name}, Country: {breed.country},
                            Lifespan: {breed.country}
                        </p>
                        <button onClick={() => handleDeletePet(id)}>
                            Delete
                        </button>
                        <button
                            onClick={() =>
                                history.push(`${ROUTES.updatePet}/${id}`)
                            }
                        >
                            Update
                        </button>
                    </div>
                ))
            ) : (
                <p>There are no pets in the store.</p>
            )}
        </div>
    );
};

export default PetsList;
