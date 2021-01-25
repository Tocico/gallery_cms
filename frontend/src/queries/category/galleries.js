import gql from 'graphql-tag';

const CATEGORY_GALLERIES_QUERY = gql`
  query Category($id: ID!){
    category(id: $id) {
      name
      galleries {
           id
        title
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_GALLERIES_QUERY;