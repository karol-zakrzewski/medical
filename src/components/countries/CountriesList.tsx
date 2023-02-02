import { GetCountriesQuery } from '@/gql/graphql'
import React from 'react'
import CountryElement from './country/CountryElement'

type Props = GetCountriesQuery

const CountriesList = ({ countries }: Props) => {
  return (
    <div>
      {countries.map((country) => {
        return <CountryElement key={country.code} country={country} />
      })}
    </div>
  )
}

export default CountriesList
