import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <Link to={ROUTES.breeds}>Breeds List</Link>
            <Link to={ROUTES.pets}>Pets List</Link>
            <Link to={ROUTES.createBreed}>Create Breed</Link>
            <Link to={ROUTES.createPet}>Create Pet</Link>
        </div>
    );
};

export default Footer;
