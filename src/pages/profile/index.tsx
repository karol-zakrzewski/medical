import React from 'react'
import { useQuery } from '@apollo/client'
import { profileCountryCode } from '@/utils/consts'
import { countryQuery } from '@/components/countries/Countries.queries'
import ProfileCard from '@/components/profile/ProfileCard'

const Profile = () => {
  const { loading, error, data } = useQuery(countryQuery, {
    variables: { code: profileCountryCode },
  })

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error : {error.message}</p>
  }

  if (data) {
    return (
      <div className="m-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl">Profile</h1>
        <ProfileCard profile={data.country} />
      </div>
    )
  }
}

export default Profile
