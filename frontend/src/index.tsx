import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";
import AppLayout from "./components/AppLayout";

import "./index.css";

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <AppLayout>
                    <Routes />
                </AppLayout>
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
