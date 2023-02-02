import { GetCountryQuery } from '@/gql/graphql'
import { paths } from '@/utils/consts'
import { PickByValue } from '@/utils/general'
import Link from 'next/link'
import React from 'react'

type Props = {
  profile: PickByValue<GetCountryQuery, 'country'>
}

const ProfileCard = ({ profile }: Props) => {
  return (
    <div>
      <div className="m-2 w-60 p-1 bg-gray-100 border rounded-md">
        <Link href={`${paths.COUNTRIES}/${profile?.code.toLowerCase()}`}>
          <h2>{profile?.name}</h2>
          <p>{profile?.code}</p>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
