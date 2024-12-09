import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema/index";
import resolvers from "./resolvers/index.js";
import context from "./context.js";
import APIContextInterface from "./APIContextInterface.js";

const typeDefs = schema;

const server = new ApolloServer<APIContextInterface>({
        typeDefs,
        resolvers,
});

async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: context(server),
    });
  
    console.log(`🚀  Server ready at: ${url}`);
}

startServer();