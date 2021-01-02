import React, { ReactNode } from 'react';

import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';
import { LinksQuery } from '../../generated/graphql';

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

const App: ReactNode = () => {
  const { loading, error, data } = useQuery<LinksQuery>(query);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.graphQLErrors);
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>Links</h1>
      {data?.links.data.map((d) => (
        <p key={d?.address}>
          {d?.address} | {d?.author.displayName}
        </p>
      ))}
    </>
  );
};

export default App;
