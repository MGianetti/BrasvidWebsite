import Head from 'next/head'
import { NavBar } from '../../components/nav-bar'
import { Footer } from '../../components/footer'

export function MainLayout(props) {
  const { children } = props

  return (
    <>
      <Head>
        <title>Brasvid</title>
        <meta name="description" content="Vidros curvos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute h-hero-mobile sm:h-hero -z-1 bg-hero-pattern left-0 top-0 bottom-0 w-full" />
      <NavBar />
      <main className="w-full max-w-4xl mx-auto">{children}</main>
      <Footer />
    </>
  )
}
