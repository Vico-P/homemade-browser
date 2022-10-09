const resolvers = {
  Result: {
    title: (parent: any, args: any, context: any, info: any) => {
      console.log("Title resolver : ", parent, args);
      return "test title";
    },
    link: (parent: any, args: any, context: any, info: any) => {
      console.log("Link resolver : ", parent, args);
      return "test link";
    },
  },
};

export { resolvers };
