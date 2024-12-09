import gql from 'graphql-tag';
import {Resolvers} from '../../types';

export const typeDef = gql`
  type RepositoryModel {
    name: String
    private: Boolean
    html_url: String
    created_at: String
    updated_at: String
    description: String
  }
  type Query {
    getProjects: [RepositoryModel]
  }

  type Mutation {
    updateProject(data: String): String
  }
`;

export const resolvers: Resolvers = {
  Mutation: {
    updateProject: async (_, { data }, { dataSources }) => {
      return data;
    },
  },
    Query: {
        getProjects: async (_, __, { dataSources }) => await dataSources.gitHubAPI.getProjects()
    },
};
