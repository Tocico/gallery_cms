import gql from "graphql-tag";

const GALLERIES_QUERY = gql`
  query Galleries {
    galleries {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default GALLERIES_QUERY;