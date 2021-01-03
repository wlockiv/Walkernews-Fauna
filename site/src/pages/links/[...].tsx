import { Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Router } from '@reach/router';
import Layout from '../../components/layout';
import { LinksHome, LinkPage } from '../../routes';

const App: ReactNode = () => (
  <Layout>
    <Container minW="xl" maxW="2xl">
      <Router>
        <LinksHome path="/links" />
        <LinkPage path="/links/:linkId" />
      </Router>
    </Container>
  </Layout>
);

export default App;
