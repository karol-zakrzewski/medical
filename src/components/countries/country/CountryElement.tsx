import { paths } from '@/utils/consts'
import Link from 'next/link'
import React from 'react'
import { Country } from '../Countries.types'

type Props = {
  country: Country
}

const CountryElement = ({ country }: Props) => {
  return (
    <Link href={`${paths.COUNTRIES}/${country.code}`}>
      <div className="m-2 w-60 p-1 bg-gray-100 border rounded-md">
        <h2>{country.name}</h2>
        <p>{country.code}</p>
      </div>
    </Link>
  )
}

export default CountryElement
