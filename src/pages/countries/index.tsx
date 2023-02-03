import React from 'react'
import { request } from 'graphql-request'
import CountriesList from '@/components/countries/CountriesList'
import { paths, urls } from '@/utils/consts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { countriesQuery } from '@/utils/queries'
import { GetCountriesQuery } from '@/gql/graphql'
import Header from '@/components/ui/header/Header'
import Link from '@/components/ui/link/Link'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Countries = ({ data }: Props) => {
  return (
    <div className="m-3 flex flex-col justify-center items-center flex-wrap">
      <Header title="Countries">
        <Link href={paths.HOME}>Home</Link>
      </Header>
      <CountriesList countries={data.countries} />
    </div>
  )
}

export default Countries

export const getStaticProps: GetStaticProps<{
  data: GetCountriesQuery
}> = async () => {
  const data = await request(urls.endpoint, countriesQuery)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
