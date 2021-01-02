import React from 'react';
import { Box, Flex, IconButton, Link as ChakraLink, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { LinksQuery } from '../generated/graphql';

type LinkListProps = {
  data: LinksQuery;
};

export const LinkList: React.FC<LinkListProps> = ({ data }) => (
  <>
    {data ? (
      data.links.data.map((d) => (
        <Box key={d?._id} borderWidth="1px" borderRadius="md" m={1} px={2} py={1}>
          <Flex>
            <Text>{d?.title}</Text>
            <ChakraLink href={d?.address} isExternal marginLeft="auto">
              <IconButton
                aria-label="external link"
                size="xs"
                color="gray.400"
                variant="ghost"
                icon={<ExternalLinkIcon />}
              />
            </ChakraLink>
          </Flex>
          <Text fontSize="xs" color="gray.500">
            {d?.author.displayName}
          </Text>
        </Box>
      ))
    ) : (
      <></>
    )}
  </>
);

export default LinkList;
