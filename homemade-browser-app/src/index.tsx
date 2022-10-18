import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ResearchProvider } from "./context/ResearchContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <ResearchProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ResearchProvider>
  </ApolloProvider>
);
