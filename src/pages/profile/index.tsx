import React from 'react'
import { useQuery } from '@apollo/client'
import { profileCountryCode } from '@/utils/consts'
import { countryQuery } from '@/components/countries/Countries.queries'

const Profiles = () => {
  const { loading, error, data } = useQuery(countryQuery, {
    variables: { code: profileCountryCode },
  })

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error : {error.message}</p>
  }

  console.log(data)

  return <div>Profiles</div>
}

export default Profiles
