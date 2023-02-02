import React from 'react'
import { Country as CountryType } from './Countries.types'
import CountryElement from './country/CountryElement'

type Props = {
  countries: CountryType[]
}

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
