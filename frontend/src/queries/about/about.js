import gql from 'graphql-tag'

const ABOUT_QUERY = gql`
  query About {
      about {
          title
          content
      }
  }
`

export default ABOUT_QUERY
