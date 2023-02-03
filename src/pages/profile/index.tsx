import React from 'react'
import { useQuery } from '@apollo/client'
import { paths, profileCountryCode } from '@/utils/consts'
import { profileCountryQuery } from '@/utils/queries'
import CountryElement from '@/components/countries/country/CountryElement'
import Header from '@/components/ui/header/Header'
import Link from '@/components/ui/link/Link'

const Profile = () => {
  const { loading, error, data } = useQuery(profileCountryQuery, {
    variables: { code: profileCountryCode },
  })

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error : {error.message}</p>
  }
  if (!data || !data.country) {
    return <p>Something went wrong...</p>
  }

  const { __typename, ...countryData } = data.country
  return (
    <div className="m-3 flex flex-col justify-center items-center">
      <Header title="Countries">
        <Link href={paths.HOME}>Home</Link>
      </Header>
      <CountryElement country={countryData} />
    </div>
  )
}

export default Profile
