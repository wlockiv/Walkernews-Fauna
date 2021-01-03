import React from 'react';
import { Box, Flex, IconButton, Link as ChakraLink, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from '@reach/router';
import { Link, LinksQuery, Maybe, User } from '../generated/graphql';

type LinkListItemProps = {
  link: Maybe<
    Pick<Link, `_id` | `address` | `createdAt` | `title`> & {
      author: { __typename?: `User` } & Pick<User, `email` | `displayName`>;
    }
  >;
};

const LinkListItem: React.FC<LinkListItemProps> = ({ link }) => {
  if (!link) return <></>;

  return (
    <Box key={link._id} borderWidth="1px" borderRadius="md" my={1} px={2} py={1}>
      <Flex>
        <ReachLink to={`/links/${link._id}`}>{link.title}</ReachLink>
        <ChakraLink href={link.address} isExternal marginLeft="auto">
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
        {link.author.displayName}
      </Text>
    </Box>
  );
};

type LinkListProps = {
  data: LinksQuery;
};

const LinkList: React.FC<LinkListProps> = ({ data }) => (
  <>{data ? data.links.data.map((d) => <LinkListItem link={d} />) : <></>}</>
);

export default LinkList;
