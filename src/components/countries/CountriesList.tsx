import React from 'react'
import { Countries } from './Countries.types'
import CountryElement from './country/CountryElement'

type Props = Countries

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
