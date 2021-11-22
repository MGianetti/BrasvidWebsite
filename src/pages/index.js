import { useRouter } from 'next/router'
import { createRef, useCallback, useEffect } from 'react'

import { AboutUs } from '../components/landing-page/about-us'
import { ContactUs } from '../components/landing-page/contact-us'
import { HeroSection } from '../components/landing-page/hero-section'
import { OurServices } from '../components/landing-page/our-services'
import { MainLayout } from '../layouts/main'
import {
  ABOUT_PATH,
  CONTACT_US_PATH,
  HOME_PATH,
  SERVICES_PATH,
} from '../resources/strings'

export default function Home() {
  const router = useRouter()

  const homeRef = createRef('homeRef')
  const aboutUsRef = createRef('aboutUsRef')
  const ourServicesRef = createRef('ourServicesRef')
  const contactUs = createRef('contactUs')

  const hashRouteCompleteCb = useCallback(
    url => {
      switch (url) {
        case HOME_PATH:
          homeRef.current.scrollIntoView()
          break
        case ABOUT_PATH:
          aboutUsRef.current.scrollIntoView()
          break
        case SERVICES_PATH:
          ourServicesRef.current.scrollIntoView()
          break
        case CONTACT_US_PATH:
          contactUs.current.scrollIntoView()
          break
        default:
          break
      }
    },
    [aboutUsRef, contactUs, homeRef, ourServicesRef],
  )

  useEffect(() => {
    hashRouteCompleteCb(router.asPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    router.events.on('hashChangeComplete', hashRouteCompleteCb)

    return () => {
      router.events.off('hashChangeComplete', hashRouteCompleteCb)
    }
  }, [hashRouteCompleteCb, router.events])

  async function handleFormSubmit(form) {
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const { previewURL } = await res.json()
      alert(previewURL)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <MainLayout>
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={ourServicesRef}>
        <OurServices />
      </div>
      <div ref={contactUs}>
        <ContactUs onSubmit={handleFormSubmit} />
      </div>
    </MainLayout>
  )
}
