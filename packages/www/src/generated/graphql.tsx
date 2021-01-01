import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Date: any;
};







export type Comment = {
  __typename?: 'Comment';
  author: User;
  /** The document's ID. */
  _id: Scalars['ID'];
  link: Link;
  createdAt: Scalars['Time'];
  content: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** Allow manipulating the relationship between the types 'Comment' and 'User' using the field 'Comment.author'. */
export type CommentAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'Comment' input values */
export type CommentInput = {
  content: Scalars['String'];
  createdAt: Scalars['Time'];
  link?: Maybe<CommentLinkRelation>;
  author?: Maybe<CommentAuthorRelation>;
};

/** Allow manipulating the relationship between the types 'Comment' and 'Link' using the field 'Comment.link'. */
export type CommentLinkRelation = {
  /** Create a document of type 'Link' and associate it with the current document. */
  create?: Maybe<LinkInput>;
  /** Connect a document of type 'Link' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** The pagination object for elements of type 'Comment'. */
export type CommentPage = {
  __typename?: 'CommentPage';
  /** The elements of type 'Comment' in this page. */
  data: Array<Maybe<Comment>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};


export type Link = {
  __typename?: 'Link';
  author: User;
  /** The document's ID. */
  _id: Scalars['ID'];
  createdAt: Scalars['Time'];
  address: Scalars['String'];
  title: Scalars['String'];
  comments: CommentPage;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type LinkCommentsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Link' and 'User' using the field 'Link.author'. */
export type LinkAuthorRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>;
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Link' and 'Comment'. */
export type LinkCommentsRelation = {
  /** Create one or more documents of type 'Comment' and associate them with the current document. */
  create?: Maybe<Array<Maybe<CommentInput>>>;
  /** Connect one or more documents of type 'Comment' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Comment' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'Link' input values */
export type LinkInput = {
  title: Scalars['String'];
  address: Scalars['String'];
  createdAt: Scalars['Time'];
  comments?: Maybe<LinkCommentsRelation>;
  author?: Maybe<LinkAuthorRelation>;
};

/** The pagination object for elements of type 'Link'. */
export type LinkPage = {
  __typename?: 'LinkPage';
  /** The elements of type 'Link' in this page. */
  data: Array<Maybe<Link>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
  createUser: User;
  updateLink?: Maybe<Link>;
  updateCurrentUser: User;
  /** Update an existing document in the collection of 'Comment' */
  updateComment?: Maybe<Comment>;
  /** Delete an existing document in the collection of 'Comment' */
  deleteComment?: Maybe<Comment>;
  createLink: Link;
  /** Delete an existing document in the collection of 'Link' */
  deleteLink?: Maybe<Link>;
  loginUser: Scalars['String'];
  createComment: Comment;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationCreateUserArgs = {
  input: NewUserInput;
};


export type MutationUpdateLinkArgs = {
  data: UpdateLinkInput;
};


export type MutationUpdateCurrentUserArgs = {
  input?: Maybe<UpdateCurrentUserInput>;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  data: CommentInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLinkArgs = {
  data: NewLinkInput;
};


export type MutationDeleteLinkArgs = {
  id: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationCreateCommentArgs = {
  data: NewCommentInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type NewCommentInput = {
  linkId: Scalars['ID'];
  content: Scalars['String'];
};

export type NewLinkInput = {
  title: Scalars['String'];
  address: Scalars['String'];
};

export type NewUserInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  linkById: Link;
  /** Find a document from the collection of 'Link' by its id. */
  findLinkByID?: Maybe<Link>;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  links: LinkPage;
  /** Find a document from the collection of 'Comment' by its id. */
  findCommentByID?: Maybe<Comment>;
};


export type QueryFindLinkByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryLinksArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindCommentByIdArgs = {
  id: Scalars['ID'];
};


export type UpdateCurrentUserInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
};

export type UpdateLinkInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  address: Scalars['String'];
};

export type UpdateUserInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  email: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  links: LinkPage;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type UserLinksArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** 'User' input values */
export type UserInput = {
  email: Scalars['String'];
  displayName: Scalars['String'];
  links?: Maybe<UserLinksRelation>;
};

/** Allow manipulating the relationship between the types 'User' and 'Link'. */
export type UserLinksRelation = {
  /** Create one or more documents of type 'Link' and associate them with the current document. */
  create?: Maybe<Array<Maybe<LinkInput>>>;
  /** Connect one or more documents of type 'Link' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Link' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type LinksQueryVariables = Exact<{ [key: string]: never; }>;


export type LinksQuery = (
  { __typename?: 'Query' }
  & { links: (
    { __typename?: 'LinkPage' }
    & { data: Array<Maybe<(
      { __typename?: 'Link' }
      & Pick<Link, 'address'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'email' | 'displayName'>
      ) }
    )>> }
  ) }
);


export const LinksDocument = gql`
    query Links {
  links {
    data {
      address
      author {
        email
        displayName
      }
    }
  }
}
    `;

/**
 * __useLinksQuery__
 *
 * To run a query within a React component, call `useLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useLinksQuery(baseOptions?: Apollo.QueryHookOptions<LinksQuery, LinksQueryVariables>) {
        return Apollo.useQuery<LinksQuery, LinksQueryVariables>(LinksDocument, baseOptions);
      }
export function useLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LinksQuery, LinksQueryVariables>) {
          return Apollo.useLazyQuery<LinksQuery, LinksQueryVariables>(LinksDocument, baseOptions);
        }
export type LinksQueryHookResult = ReturnType<typeof useLinksQuery>;
export type LinksLazyQueryHookResult = ReturnType<typeof useLinksLazyQuery>;
export type LinksQueryResult = Apollo.QueryResult<LinksQuery, LinksQueryVariables>;