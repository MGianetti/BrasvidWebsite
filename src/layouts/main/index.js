import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Footer } from '../../components/footer'
import { MobileMenu } from '../../components/mobile-menu'
import { NavBar } from '../../components/nav-bar'
import { SITE_DESCRIPTION, SITE_NAME } from '../../resources/strings'

export function MainLayout(props) {
  const { children } = props
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)

  function handleMenuClick() {
    setOpen(!isOpen)
  }

  function handleNavigation(route) {
    router.push(route)
    setOpen(false)
  }

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        isOpen={isOpen}
        onNavigate={handleNavigation}
        onMenuClick={handleMenuClick}
      />
      <MobileMenu
        isOpen={isOpen}
        onNavigate={handleNavigation}
        handleClickOutside={handleMenuClick}
      />
      <main className="w-full mx-auto mt-16">{children}</main>
      <Footer onNavigate={handleNavigation} />
    </>
  )
}
