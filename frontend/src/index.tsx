import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { apolloCache } from "./gql/cache";

const client = new ApolloClient({
  uri: `${window.location.origin}/graphql`,
  cache: apolloCache,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
