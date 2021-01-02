import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => (
  <>
    <Flex mb={6} px={3} py={4} bg="gray.700" justifyContent="space-between">
      <Text color="white">Walkernews</Text>
    </Flex>
    <main>{children}</main>
  </>
);

export default Layout;
