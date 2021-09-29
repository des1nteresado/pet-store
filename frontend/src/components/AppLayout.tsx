import React from "react";
import Footer from "./Footer";

const AppLayout: React.FC = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default AppLayout;
