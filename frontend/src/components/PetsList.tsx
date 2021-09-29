import React from "react";

import { useGetPets } from "../queries";

const PetsList: React.FC = () => {
    const { loading, error, data: { pets = [] } = {} } = useGetPets();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>Pets list</h2>
            {pets.length ? (
                pets.map(({ id, name, breed }) => (
                    <p>
                        {id} {name} {breed.country}
                    </p>
                ))
            ) : (
                <p>There are no pets in the store.</p>
            )}
        </div>
    );
};

export default PetsList;
