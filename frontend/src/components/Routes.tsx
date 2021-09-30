import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "../constants";
import BreedsList from "./BreedsList";
import CreateBreed from "./CreateBreed";
import CreatePet from "./CreatePet";
import PetsList from "./PetsList";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={ROUTES.pets} component={PetsList} />
            <Route path={ROUTES.breeds} component={BreedsList} />
            <Route path={ROUTES.createBreed} component={CreateBreed} />
            <Route path={ROUTES.createPet} component={CreatePet} />
            <Redirect from="*" to={ROUTES.pets} />
        </Switch>
    );
};

export default Routes;
