import gql from 'graphql-tag'

const LOGO_QUERY = gql`
   query Logo {
       logo {
           logoImg {
               url
           }
       }
   }
`

export default LOGO_QUERY