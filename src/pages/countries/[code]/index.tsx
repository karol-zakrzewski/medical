import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import {
  Countries,
  Country as CountryType,
} from '@/components/countries/Countries.types'
import { urls } from '@/utils/consts'
import request from 'graphql-request'
import {
  countriesPathsQuery,
  countryQuery,
} from '@/components/countries/Countries.queries'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Country = ({ data: { country } }: Props) => {
  const { code, emoji, languages, name } = country

  return (
    <div>
      <h2> {emoji} Country Details</h2>
      <p>
        {code} - {name}
      </p>

      <h3 className="underline">Languages</h3>
      <ul>
        {languages.map(({ name }, index) => (
          <li key={`${name}-${index}`} className="m-2">
            {++index}. {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Country

export const getStaticPaths = async () => {
  const data = await request<Countries>(urls.endpoint, countriesPathsQuery)
  const paths = data.countries.map(({ code }) => {
    return { params: { code: code.toLowerCase() } }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  data: { country: CountryType }
}> = async ({ params }) => {
  if (!params) {
    throw Error('Can not find country')
  }
  const codeParams = params.code as string
  const data = await request<{ country: CountryType }>(
    urls.endpoint,
    countryQuery,
    {
      code: codeParams.toUpperCase(),
    },
  )

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
