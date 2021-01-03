import { Heading } from '@chakra-ui/react';
import React from 'react';
import { RouteComponentProps } from '@reach/router';
import LinkList from '../components/link-list';
import { useLinksQuery } from '../generated/graphql';

const LinksHome: React.FC<RouteComponentProps> = () => {
  const { loading, error, data } = useLinksQuery();

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.graphQLErrors);
    return <h1>Error</h1>;
  }

  return (
    <>
      <Heading as="h1">Newest Links</Heading>
      {data ? <LinkList data={data} /> : <></>}
    </>
  );
};

export default LinksHome;
