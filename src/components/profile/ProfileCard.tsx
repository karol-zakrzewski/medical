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
    <div className="m-2 w-60 p-1 border rounded-md bg-white flex justify-center">
      <div>
        <Link href={`${paths.COUNTRIES}/${profile?.code.toLowerCase()}`}>
          <p>
            {profile?.code} | {profile?.name}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
