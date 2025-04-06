import { resolvers as githubResolvers, typeDef as GitHub } from './github/index';
import { resolvers as messangerResolvers, typeDef as Messanger } from './messanger/index';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash';
import { applyMiddleware } from 'graphql-middleware';

const executable = makeExecutableSchema({
  typeDefs: [GitHub, Messanger],
  resolvers: merge(
    githubResolvers,
    messangerResolvers
  ),
});

let gql_schema = applyMiddleware(
  executable
);

export const executableSchema = gql_schema;

export default executable;
