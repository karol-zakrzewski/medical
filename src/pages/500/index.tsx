import ErrorPage from '@/components/errors/ErrorPage'
import React from 'react'

const NotFound = () => {
  return <ErrorPage statusCode="500" message="Something went wrong..." />
}

export default NotFound
