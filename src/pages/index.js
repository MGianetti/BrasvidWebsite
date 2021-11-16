import { MainLayout } from '../layout/main'
import { HeroSection } from '../components/landing-page/hero-section'
import { AboutUs } from '../components/landing-page/about-us'
import { OurServices } from '../components/landing-page/our-services'
import { Faq } from '../components/landing-page/faq'
import { Brands } from '../components/landing-page/brands'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Faq />
      <Brands />
    </MainLayout>
  )
}
