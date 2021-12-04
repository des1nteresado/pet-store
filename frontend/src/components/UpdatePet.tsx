import React, { useState } from "react";
import { useParams } from "react-router";

import { GetPetData, UpdatePetDto } from "../interfaces";
import { useUpdatePet, useGetBreeds, useGetPet } from "../hooks";

const UpdatePet: React.FC = () => {
    const { id } = useParams() as any;

    const [updatePet, { error: updatePetError }] = useUpdatePet();
    const { loading, error, data: { breeds = [] } = {} } = useGetBreeds();

    const [pet, setPet] = useState<UpdatePetDto>();

    const onFetchedPet = ({ pet }: GetPetData) => {
        setPet({ id: pet.id, name: pet.name, breedId: pet.breed.id });
    };

    const { loading: isPetLoading, error: getPetError } = useGetPet(
        +id,
        onFetchedPet
    );

    if (loading || isPetLoading) return <p>Loading...</p>;
    if (error || getPetError) return <p>Error :(</p>;

    return (
        <div>
            <h3>Add a Pet</h3>
            {error ? <p>Oh no! {updatePetError?.message}</p> : null}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updatePet({
                        variables: { updatePetDto: pet as UpdatePetDto },
                    });
                    setPet({});
                }}
            >
                <p>
                    <label>Name</label>
                    <input
                        name="petName"
                        value={pet?.name}
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
                        value={pet?.breedId}
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
                    Update pet
                </button>
            </form>
        </div>
    );
};

export default UpdatePet;
