"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolvers = {
    Query: {
        search: (parent, args, context, info) => {
            console.log(parent, args, context, info);
            //This is what we return to the subtype (here result type of graphql) to process data in result type resolvers after
            return {
                test: "Value1",
                test2: "Value2",
            };
        },
    },
};
exports.resolvers = resolvers;
