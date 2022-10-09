"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const path_1 = __importDefault(require("path"));
const launchServer = async () => {
    // Loading every graphql file to put it in Apollo Server
    const typeDefs = (0, load_1.loadSchemaSync)("./src/schemas/*.graphql", {
        loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
    });
    console.log(__dirname);
    // Loading all resolver from resolvers directory
    const resolvers = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "resolvers"));
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers: { ...(0, merge_1.mergeResolvers)(resolvers), JSON: graphql_type_json_1.default },
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
};
launchServer();
