import React from "react";

import { GET_PETS, useDeletePet, useGetPets } from "../queries";

const PetsList: React.FC = () => {
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
                        <button onClick={() => {}}>Update</button>
                    </div>
                ))
            ) : (
                <p>There are no pets in the store.</p>
            )}
        </div>
    );
};

export default PetsList;
