import gql from 'graphql-tag';
import {Resolvers} from '../../types';

export const typeDef = gql`
    input MessageModel {
        name: String
        email: String
        country: String
        message: String
    }

    type Mutation {
        sendMessage(data: MessageModel): String
    }
`;

export const resolvers: Resolvers = {
    Mutation: {
        sendMessage: async (_, { data }, { dataSources }) => {
            return await dataSources.messangerAPI.sendMessage(data);
        },
    }
};
