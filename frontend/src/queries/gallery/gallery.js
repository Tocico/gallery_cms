import gql from "graphql-tag";

const GALLERY_QUERY = gql`
  query Galleries($id: ID!) {
    gallery(id: $id) {
      id
      title
      image {
        url
      }
      category {
        id
        name
      }
      published_at
    }
  }
`;

export default GALLERY_QUERY;