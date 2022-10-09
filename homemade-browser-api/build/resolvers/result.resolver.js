"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolvers = {
    Result: {
        title: (parent, args, context, info) => {
            console.log("Title resolver : ", parent, args);
            return "test title";
        },
        link: (parent, args, context, info) => {
            console.log("Link resolver : ", parent, args);
            return "test link";
        },
    },
};
exports.resolvers = resolvers;
