import { gql } from 'graphql-request'

export const countriesPathsQuery = gql`
  {
    countries {
      code
    }
  }
`

export const countriesQuery = gql`
  {
    countries {
      code
      name
    }
  }
`

export const countryQuery = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      languages {
        name
      }
    }
  }
`
