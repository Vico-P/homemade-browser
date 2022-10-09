import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import GraphQLJSON from "graphql-type-json";
import path from "path";

const launchServer: () => Promise<void> = async () => {
  // Loading every graphql file to put it in Apollo Server
  const typeDefs = loadSchemaSync("./src/schemas/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  // Loading all resolver from resolvers directory (in npm run dev mode it will load from src directory and build directory if using npm start)
  const resolvers = loadFilesSync(path.join(__dirname, "resolvers"));

  const server = new ApolloServer({
    typeDefs,
    resolvers: { ...mergeResolvers(resolvers), JSON: GraphQLJSON },
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

void launchServer();
