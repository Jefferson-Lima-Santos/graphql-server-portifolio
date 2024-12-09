import { resolvers as githubResolvers, typeDef as GitHub } from './github/index';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash';
import { applyMiddleware } from 'graphql-middleware';
import { Resolvers } from '../types';

const resolvers: Resolvers = {};

const executable = makeExecutableSchema({
  typeDefs: [GitHub],
  resolvers: merge(
    resolvers,
    githubResolvers,
  ),
});

let gql_schema = applyMiddleware(
  executable
);

export const executableSchema = gql_schema;

export default executable;
