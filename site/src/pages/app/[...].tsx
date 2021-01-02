import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, IconButton, Text, Flex, Link } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Layout from '../../components/layout';
import LinkList from '../../components/link-list';
import { useLinksQuery } from '../../generated/graphql';

const App: ReactNode = () => {
  const { loading, error, data } = useLinksQuery();

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.graphQLErrors);
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <Container minW="xl" maxW="2xl">
        <Heading as="h1">Newest Links</Heading>
        {data ? <LinkList data={data} /> : <></>}
        {/* <LinkList links={data?.links.data} /> */}
      </Container>
    </Layout>
  );
};

export default App;
