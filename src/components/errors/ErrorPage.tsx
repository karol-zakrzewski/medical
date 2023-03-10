import { paths } from '@/utils/consts'
import React from 'react'
import Link from '../ui/link/Link'

type Props = {
  statusCode: string
  message: string
}

const ErrorPage = ({ statusCode, message }: Props) => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>
            {statusCode}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">{message}</p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href={paths.HOME}>Back to homepage</Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
