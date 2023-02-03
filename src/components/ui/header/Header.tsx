import React from 'react'

type Props = {
  children: JSX.Element
  title: string
}

const Header = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-5">{title}</h1>
      <div className="flex justify-between">{children}</div>
    </div>
  )
}

export default Header
