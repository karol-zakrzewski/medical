import React from 'react'
import { request, gql } from 'graphql-request'
import { Countries as CountriesType } from '@/components/countries/Countries.types'
import CountriesList from '@/components/countries/CountriesList'
import { urls } from '@/utils/consts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const query = gql`
  {
    countries {
      code
      name
      emoji
    }
  }
`

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Countries = ({ data }: Props) => {
  return (
    <div>
      <h1>Countries</h1>
      <CountriesList countries={data.countries} />
    </div>
  )
}

export default Countries

export const getStaticProps: GetStaticProps<{
  data: CountriesType
}> = async () => {
  const data = await request<CountriesType>(urls.endpoint, query)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
