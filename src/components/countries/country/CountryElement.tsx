import { GetCountriesQuery } from '@/gql/graphql'
import { paths } from '@/utils/consts'
import { PickByValue } from '@/utils/general'
import Link from 'next/link'
import React from 'react'

type Props = {
  country: PickByValue<GetCountriesQuery, 'countries'>[number]
}

const CountryElement = ({ country }: Props) => {
  return (
    <Link href={`${paths.COUNTRIES}/${country?.code.toLowerCase()}`}>
      <div className="m-2 w-60 p-1 bg-gray-100 border rounded-md">
        <h2>{country?.name}</h2>
        <p>{country?.code}</p>
      </div>
    </Link>
  )
}

export default CountryElement
