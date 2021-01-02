import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client/core";

import { ApolloProvider } from "@apollo/client";
import React from "react";
import { setContext } from "@apollo/client/link/context";

export const wrapRootElement = ({ element }, themeOptions) => {
  const authLink = setContext((request) => ({
    headers: { Authorization: `Bearer ${themeOptions.faunaClientKey}` },
  }));

  const apolloCache = new InMemoryCache();

  const httpLink = new HttpLink({ uri: "https://graphql.fauna.com/graphql" });

  const graphqlClient = new ApolloClient({
    cache: apolloCache,
    link: from([authLink, httpLink]),
  });

  return <ApolloProvider client={graphqlClient}>{element}</ApolloProvider>;
};
