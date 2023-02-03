import NextLink from 'next/link'
import React from 'react'

type Props = {
  children: string
  href: string
}

const Link = ({ children, href }: Props) => {
  return (
    <NextLink
      className="m-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      href={href}
    >
      {children}
    </NextLink>
  )
}

export default Link
