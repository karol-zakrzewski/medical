import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { paths, urls } from '@/utils/consts'
import request from 'graphql-request'
import { countriesPathsQuery, countryQuery } from '@/utils/queries'
import { GetCountryQuery } from '@/gql/graphql'
import Link from '@/components/ui/link/Link'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Country = ({ data }: Props) => {
  const country = data.country

  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <Link href={paths.COUNTRIES}>Return</Link>
      <div className="w-60 mx-auto p-5 bg-white rounded-md shadow-md flex flex-col items-center">
        <h2 className="text-2xl bold mb-2">Country Details</h2>
        <p className="text-xl">
          {country?.emoji} {country?.code} - {country?.name}
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
