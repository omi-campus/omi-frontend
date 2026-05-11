import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import CategoryPills from '@/components/landing/CategoryPills'
import TrendingListings from '@/components/landing/TrendingListings'
import WhyOmi from '@/components/landing/WhyOmi'
import VendorCTA from '@/components/landing/VendorCTA'
import AppDownload from '@/components/landing/AppDownload'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-chalk-white font-manrope">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CategoryPills />
      <TrendingListings />
      <WhyOmi />
      <VendorCTA />
      <AppDownload />
      <Footer />
    </main>
  )
}