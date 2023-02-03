import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { urls } from '@/utils/consts'
import request from 'graphql-request'
import { countriesPathsQuery, countryQuery } from '@/utils/queries'
import { GetCountryQuery } from '@/gql/graphql'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Country = ({ data }: Props) => {
  const country = data.country

  return (
    <div>
      <h2> {country?.emoji} Country Details</h2>
      <p>
        {country?.code} - {country?.name}
      </p>

      <h3 className="underline">Languages</h3>
      <ul>
        {country?.languages.map(({ name }, index) => (
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
  const data = await request(urls.endpoint, countriesPathsQuery)
  const paths = data.countries.map(({ code }) => {
    return { params: { code: code.toLowerCase() } }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  data: GetCountryQuery
}> = async ({ params }) => {
  if (!params) {
    throw Error('Can not find country')
  }
  const codeParams = params.code as string
  const data = await request(urls.endpoint, countryQuery, {
    code: codeParams.toUpperCase(),
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
