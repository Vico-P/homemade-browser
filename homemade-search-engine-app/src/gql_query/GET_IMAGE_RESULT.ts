import { gql } from "@apollo/client";

const GET_IMAGE_RESULT = gql`
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
        snippet
      }
    }
  }
`;

export default GET_IMAGE_RESULT;
