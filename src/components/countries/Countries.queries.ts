import { graphql } from '../../gql'

export const countriesPathsQuery = graphql(`
  query GetCountriesPaths {
    countries {
      code
    }
  }
`)

export const countriesQuery = graphql(`
  query GetCountries {
    countries {
      code
      name
    }
  }
`)

export const countryQuery = graphql(`
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
`)
