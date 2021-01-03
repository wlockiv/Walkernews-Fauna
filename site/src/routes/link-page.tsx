import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { useFindLinkByIdQuery } from '../generated/graphql';

type LinkPageURLParams = {
  linkId?: string;
};

const LinkPage: React.FC<RouteComponentProps & LinkPageURLParams> = ({ linkId }) => {
  const { loading, error, data } = useFindLinkByIdQuery({ variables: { linkId: linkId || `` } });

  if (loading) return <p>loading...</p>;
  if (error || !data || !data.findLinkByID) {
    console.error(error);
    return <p>error...</p>;
  }

  const link = data.findLinkByID;

  return (
    <>
      <Box borderWidth="1px" borderRadius="md" padding={2} mb={1}>
        <ChakraLink to={link.address} isExternal>
          <Heading fontSize="2xl">{link.title}</Heading>
        </ChakraLink>
        <Text fontSize="sm" color="gray.500">
          By {link.author.displayName} | {link.createdAt}
        </Text>
      </Box>
      {link.comments.data.map((d) => (
        <Box key={d?._id} padding={2} pl={6} borderWidth="1px" borderRadius="md" my={2}>
          <Text fontSize="sm" color="gray.500">
            {d?.author.displayName} | {d?.createdAt}
          </Text>
          <Text>{d?.content}</Text>
        </Box>
      ))}
    </>
  );
};

export default LinkPage;
