import React from 'react'
import { request } from 'graphql-request'
import { Countries as CountriesType } from '@/components/countries/Countries.types'
import CountriesList from '@/components/countries/CountriesList'
import { urls } from '@/utils/consts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { countriesQuery } from '@/components/countries/Countries.queries'

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
  const data = await request<CountriesType>(urls.endpoint, countriesQuery)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
