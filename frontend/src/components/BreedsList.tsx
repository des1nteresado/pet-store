import React from "react";

import { useGetBreeds } from "../hooks";

const BreedsList: React.FC = () => {
    const { loading, error, data: { breeds = [] } = {} } = useGetBreeds();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="breedsList">
            <h2>Breeds list</h2>
            {breeds.length ? (
                breeds.map(({ name, country, lifespan }) => (
                    <div className="breedContainer">
                        <p>
                            {name}, Country: {country}, Lifespan: {lifespan}
                        </p>
                    </div>
                ))
            ) : (
                <p>There are no breeds in the store. Just create new one.</p>
            )}
        </div>
    );
};

export default BreedsList;
