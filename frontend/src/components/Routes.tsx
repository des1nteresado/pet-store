import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "../constants";
import BreedsList from "./BreedsList";
import CreateBreed from "./CreateBreed";
import CreatePet from "./CreatePet";
import PetsList from "./PetsList";
import UpdatePet from "./UpdatePet";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.pets} component={PetsList} />
            <Route exact path={ROUTES.breeds} component={BreedsList} />
            <Route exact path={ROUTES.createBreed} component={CreateBreed} />
            <Route exact path={ROUTES.createPet} component={CreatePet} />
            <Route
                exact
                path={`${ROUTES.updatePet}/:id`}
                component={UpdatePet}
            />
            <Redirect from="*" to={ROUTES.pets} />
        </Switch>
    );
};

export default Routes;
