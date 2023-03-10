import Link from '@/components/ui/link/Link'
import { paths } from '@/utils/consts'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="m-3">
          <Link href={paths.COUNTRIES}>Countries</Link>
          <Link href={paths.PROFILE}>Profiles</Link>
        </div>
      </main>
    </>
  )
}
