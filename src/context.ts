import {ApolloServer} from "@apollo/server";
import APIContextInterface from "./APIContextInterface.js";
import GitHubAPI from "./dataSources/gitHubAPI.js";

const context = (server: ApolloServer<APIContextInterface>) => async (): Promise<APIContextInterface>  => {
    const { cache } = server;

    return {
        dataSources: {
            gitHubAPI : new GitHubAPI({ cache }),
        }
    };
}

export default context;
