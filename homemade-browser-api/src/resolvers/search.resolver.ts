const resolvers = {
  Query: {
    search: (parent: any, args: any, context: any, info: any) => {
      console.log(parent, args, context, info);
      // This is what we return to the subtype (here result type of graphql) to process data in result type resolvers after
      return {
        test: "Value1",
        test2: "Value2",
      };
    },
  },
};

export { resolvers };
