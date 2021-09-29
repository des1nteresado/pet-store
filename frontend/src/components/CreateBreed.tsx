import React, { useState } from "react";

import { CreateBreedDto } from "../interfaces";
import { useCreateBreed } from "../queries";

const CreateBreed: React.FC = () => {
    const [breed, setBreed] = useState<CreateBreedDto>();
    const [createBreed, { error }] = useCreateBreed(breed as CreateBreedDto);

    return (
        <div>
            <h3>Add a Breed</h3>
            {error ? <p>Oh no! {error.message}</p> : null}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createBreed();
                    setBreed({});
                }}
            >
                <p>
                    <label>Name</label>
                    <input
                        name="breedName"
                        onChange={(e) =>
                            setBreed((breed) => ({
                                ...breed,
                                name: e.target.value,
                            }))
                        }
                    />
                </p>
                <p>
                    <label>Country</label>
                    <input
                        name="country"
                        onChange={(e) =>
                            setBreed((breed) => ({
                                ...breed,
                                country: e.target.value,
                            }))
                        }
                    />
                </p>
                <p>
                    <label>Lifespan</label>
                    <input
                        type="number"
                        name="lifespan"
                        onChange={(e) =>
                            setBreed((breed) => ({
                                ...breed,
                                lifespan: +e.target.value,
                            }))
                        }
                    />
                </p>
                <button type="submit">Create breed</button>
            </form>
        </div>
    );
};

export default CreateBreed;
