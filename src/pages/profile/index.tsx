import React from 'react'
import { useQuery } from '@apollo/client'
import { profileCountryCode } from '@/utils/consts'
import { profileCountryQuery } from '@/utils/queries'
import CountryElement from '@/components/countries/country/CountryElement'

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
      <h1 className="text-3xl">Profile</h1>
      <CountryElement country={countryData} />
    </div>
  )
}

export default Profile
