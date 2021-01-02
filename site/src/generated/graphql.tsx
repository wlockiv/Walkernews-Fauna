import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
      & Pick<Link, '_id' | 'address' | 'createdAt' | 'title'>
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
      _id
      address
      createdAt
      title
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


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LinkPage: ResolverTypeWrapper<LinkPage>;
  Link: ResolverTypeWrapper<Link>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  CommentPage: ResolverTypeWrapper<CommentPage>;
  Comment: ResolverTypeWrapper<Comment>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Mutation: ResolverTypeWrapper<{}>;
  UserInput: UserInput;
  UserLinksRelation: UserLinksRelation;
  LinkInput: LinkInput;
  LinkCommentsRelation: LinkCommentsRelation;
  CommentInput: CommentInput;
  CommentLinkRelation: CommentLinkRelation;
  CommentAuthorRelation: CommentAuthorRelation;
  LinkAuthorRelation: LinkAuthorRelation;
  NewUserInput: NewUserInput;
  UpdateLinkInput: UpdateLinkInput;
  UpdateCurrentUserInput: UpdateCurrentUserInput;
  NewLinkInput: NewLinkInput;
  LoginUserInput: LoginUserInput;
  NewCommentInput: NewCommentInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  UpdateUserInput: UpdateUserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  User: User;
  String: Scalars['String'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LinkPage: LinkPage;
  Link: Link;
  Time: Scalars['Time'];
  CommentPage: CommentPage;
  Comment: Comment;
  Long: Scalars['Long'];
  Mutation: {};
  UserInput: UserInput;
  UserLinksRelation: UserLinksRelation;
  LinkInput: LinkInput;
  LinkCommentsRelation: LinkCommentsRelation;
  CommentInput: CommentInput;
  CommentLinkRelation: CommentLinkRelation;
  CommentAuthorRelation: CommentAuthorRelation;
  LinkAuthorRelation: LinkAuthorRelation;
  NewUserInput: NewUserInput;
  UpdateLinkInput: UpdateLinkInput;
  UpdateCurrentUserInput: UpdateCurrentUserInput;
  NewLinkInput: NewLinkInput;
  LoginUserInput: LoginUserInput;
  NewCommentInput: NewCommentInput;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  UpdateUserInput: UpdateUserInput;
};

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CollectionDirectiveArgs = {   name: Scalars['String']; };

export type CollectionDirectiveResolver<Result, Parent, ContextType = any, Args = CollectionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IndexDirectiveArgs = {   name: Scalars['String']; };

export type IndexDirectiveResolver<Result, Parent, ContextType = any, Args = IndexDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ResolverDirectiveArgs = {   name?: Maybe<Scalars['String']>;
  paginated?: Scalars['Boolean']; };

export type ResolverDirectiveResolver<Result, Parent, ContextType = any, Args = ResolverDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RelationDirectiveArgs = {   name?: Maybe<Scalars['String']>; };

export type RelationDirectiveResolver<Result, Parent, ContextType = any, Args = RelationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UniqueDirectiveArgs = {   index?: Maybe<Scalars['String']>; };

export type UniqueDirectiveResolver<Result, Parent, ContextType = any, Args = UniqueDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentPage'] = ResolversParentTypes['CommentPage']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Time'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['CommentPage'], ParentType, ContextType, RequireFields<LinkCommentsArgs, never>>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkPage'] = ResolversParentTypes['LinkPage']> = {
  data?: Resolver<Array<Maybe<ResolversTypes['Link']>>, ParentType, ContextType>;
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'data'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateLink?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType, RequireFields<MutationUpdateLinkArgs, 'data'>>;
  updateCurrentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateCurrentUserArgs, never>>;
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'id' | 'data'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  createLink?: Resolver<ResolversTypes['Link'], ParentType, ContextType, RequireFields<MutationCreateLinkArgs, 'data'>>;
  deleteLink?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType, RequireFields<MutationDeleteLinkArgs, 'id'>>;
  loginUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'data'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  linkById?: Resolver<ResolversTypes['Link'], ParentType, ContextType>;
  findLinkByID?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType, RequireFields<QueryFindLinkByIdArgs, 'id'>>;
  findUserByID?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindUserByIdArgs, 'id'>>;
  links?: Resolver<ResolversTypes['LinkPage'], ParentType, ContextType, RequireFields<QueryLinksArgs, never>>;
  findCommentByID?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryFindCommentByIdArgs, 'id'>>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['LinkPage'], ParentType, ContextType, RequireFields<UserLinksArgs, never>>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CommentPage?: CommentPageResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Link?: LinkResolvers<ContextType>;
  LinkPage?: LinkPageResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  collection?: CollectionDirectiveResolver<any, any, ContextType>;
  index?: IndexDirectiveResolver<any, any, ContextType>;
  resolver?: ResolverDirectiveResolver<any, any, ContextType>;
  relation?: RelationDirectiveResolver<any, any, ContextType>;
  unique?: UniqueDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;