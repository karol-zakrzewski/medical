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
    <div className="m-2 w-60 bg-white border rounded-md border-l-indigo-500 border-l-4">
      <Link href={`${paths.COUNTRIES}/${country?.code.toLowerCase()}`}>
        <p className="p-3 text-center">
          {country?.code} | {country?.name}
        </p>
      </Link>
    </div>
  )
}

export default CountryElement
