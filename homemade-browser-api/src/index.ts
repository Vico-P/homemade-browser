import { ApolloServer } from "apollo-server";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import GraphQLJSON from "graphql-type-json";
import path from "path";
import * as dotenv from "dotenv";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

dotenv.config();

const launchServer: () => Promise<void> = async () => {
  if (
    !process.env.GOOGLE_SEARCH_API_KEY ||
    !process.env.GOOGLE_SEARCH_ENGINE_ID
  ) {
    console.error(
      "You need to define GOOGLE_SEARCH_API_KEY and GOOGLE_SEARCH_ENGINE_ID in .env file"
    );
    throw new Error(
      "You need to define GOOGLE_SEARCH_API_KEY and GOOGLE_SEARCH_ENGINE_ID in .env file"
    );
  } else {
    // Loading every graphql file to put it in Apollo Server
    const typeDefs = loadSchemaSync("./src/schemas/*.graphql", {
      loaders: [new GraphQLFileLoader()],
    });

    // Loading all resolver from resolvers directory (in npm run dev mode it will load from src directory and build directory if using npm start)
    const resolvers = loadFilesSync(path.join(__dirname, "resolvers"));

    const server = new ApolloServer({
      // Use to pass variables to the resolvers for each request made
      // There is a parameter passed in the context function
      context: () => {
        return {
          key: process.env.GOOGLE_SEARCH_API_KEY ?? "",
          searchEngineId: process.env.GOOGLE_SEARCH_ENGINE_ID ?? "",
        };
      },
      typeDefs,
      resolvers: { ...mergeResolvers(resolvers), JSON: GraphQLJSON },
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    });

    server
      .listen()
      .then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      })
      .catch((error: Error) =>
        console.error(`An error occured : ${error.message}`)
      );
  }
};

launchServer().catch((error: Error) =>
  console.error(`An error occured : ${error.message}`)
);
