import { gql } from "@apollo/client";

const GET_SEARCH_RESULT = gql`
  query ExampleQuery(
    $textToSearch: String!
    $pageNumber: Int!
    $searchType: String!
  ) {
    search(
      textToSearch: $textToSearch
      page: $pageNumber
      searchType: $searchType
    ) {
      nbHits
      results {
        link
        title
        displayLink
        snippet
      }
    }
  }
`;

export default GET_SEARCH_RESULT;
