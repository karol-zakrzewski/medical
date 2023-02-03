import ErrorPage from '@/components/errors/ErrorPage'
import React from 'react'

const NotFound = () => {
  return (
    <ErrorPage statusCode="404" message="Sorry, we couldn t find this page." />
  )
}

export default NotFound
