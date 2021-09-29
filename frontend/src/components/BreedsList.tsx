import React from "react";

import { useGetBreeds } from "../queries";

const BreedsList: React.FC = () => {
    const { loading, error, data: { breeds = [] } = {} } = useGetBreeds();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>Breeds list</h2>
            {breeds.length ? (
                breeds.map(({ id, name, country, lifespan }) => (
                    <p>
                        {id} {name} {country} {lifespan}
                    </p>
                ))
            ) : (
                <p>There are no breeds in the store. Just create new one.</p>
            )}
        </div>
    );
};

export default BreedsList;
