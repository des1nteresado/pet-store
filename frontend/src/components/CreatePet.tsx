import React, { useState } from "react";

import { CreatePetDto, GetBreedsData } from "../interfaces";
import { useCreatePet, useGetBreeds } from "../hooks";

const CreatePet: React.FC = () => {
    const [pet, setPet] = useState<CreatePetDto>();
    const [createPet, { error: createPetError }] = useCreatePet();

    const onFetchBreedsCompleted = (data: GetBreedsData) => {
        if (data.breeds.length) {
            setPet((pet) => ({
                ...pet,
                breedId: data.breeds[0]?.id,
            }));
        }
    };

    const {
        loading,
        error,
        data: { breeds = [] } = {},
    } = useGetBreeds(onFetchBreedsCompleted);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h3>Add a Pet</h3>
            {error ? <p>Oh no! {createPetError?.message}</p> : null}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createPet({
                        variables: { createPetDto: pet as CreatePetDto },
                    });
                    setPet({});
                }}
            >
                <p>
                    <label>Name</label>
                    <input
                        name="petName"
                        onChange={(e) =>
                            setPet((pet) => ({
                                ...pet,
                                name: e.target.value,
                            }))
                        }
                    />
                </p>
                <p>
                    <label>Breed</label>
                    <select
                        name="breed"
                        onChange={(e) =>
                            setPet((pet) => ({
                                ...pet,
                                breedId: +e.target.value,
                            }))
                        }
                    >
                        {breeds.map((breed) => (
                            <option value={breed.id}>
                                {breed.name} - {breed.country}
                            </option>
                        ))}
                    </select>
                </p>
                <button type="submit" disabled={!breeds.length}>
                    Create pet
                </button>
                {!breeds.length && (
                    <p>
                        There is no one breeds created. Before adding a new pet,
                        you should create at least one breed.
                    </p>
                )}
            </form>
        </div>
    );
};

export default CreatePet;
