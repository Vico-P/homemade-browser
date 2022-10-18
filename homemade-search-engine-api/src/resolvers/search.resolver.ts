import { GoogleItems, SearchType } from "../types/google.types";
import searchTextOnGoogle from "../utils";

const resolvers = {
  Query: {
    search: async (
      parent: any,
      args: {
        textToSearch: string;
        searchType: SearchType;
        page: number;
      },
      context: {
        key: string;
        searchEngineId: string;
      },
      info: any
    ) => {
      const response = await searchTextOnGoogle({
        q: args.textToSearch,
        key: context.key,
        cx: context.searchEngineId,
        searchType: args.searchType,
        start: args.page * 10 - 9,
      });
      // This is what we return to the subtype (here Result type of graphql) to process data in result type resolvers after
      // In case of a list, each item will be resolved with the subtype resolvers before being returned to front
      return {
        //   We are limited to 10 pages max like it is specified in the Google Search Engine API documentation
        //   Link here -> https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list?apix_params=%7B%22q%22%3A%22Manga%22%2C%22start%22%3A99%7D
        nbHits:
          Number(response.searchInformation.totalResults) > 100
            ? 100
            : Number(response.searchInformation.totalResults),
        results: response.items as GoogleItems[],
      };
    },
  },
};

export { resolvers };
