import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  gql,
} from "@apollo/client/core";

import { LinksQuery } from "../../generated/graphql";
import React from "react";
import { setContext } from "@apollo/client/link/context";
import { useQuery } from "@apollo/client";

const authLink = setContext((request) => ({
  headers: { Authorization: `Bearer ${process.env.GATSBY_FAUNA_CLIENT_KEY}` },
}));

const apolloCache = new InMemoryCache();

const httpLink = new HttpLink({ uri: "https://graphql.fauna.com/graphql" });

const graphqlClient = new ApolloClient({
  cache: apolloCache,
  link: from([authLink, httpLink]),
});

const query = gql`
  query Links {
    links {
      data {
        address
        author {
          displayName
        }
      }
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery<LinksQuery>(query);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.graphQLErrors);
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>Links</h1>
      {data?.links.data.map((d, idx) => (
        <p key={idx}>
          {d?.address} | {d?.author.displayName}
        </p>
      ))}
    </>
  );
};
