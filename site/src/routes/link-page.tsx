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

  return (
    <>
      <Box borderWidth="1px" borderRadius="md" padding={2} mb={1}>
        <ChakraLink to={data.findLinkByID.address} isExternal>
          <Heading fontSize="2xl">{data.findLinkByID.title}</Heading>
        </ChakraLink>
        <Text fontSize="sm" color="gray.500">
          By {data.findLinkByID.author.displayName} | {data.findLinkByID.createdAt}
        </Text>
      </Box>
      {data.findLinkByID.comments.data.map((d) => (
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
