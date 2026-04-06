import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import PracticeAreas from '../components/PracticeAreas'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedLawyers from '../components/FeaturedLawyers'
import CaseHighlights from '../components/CaseHighlights'
import Testimonials from '../components/Testimonials'
import ConsultationCTA from '../components/ConsultationCTA'
import BlogInsights from '../components/BlogInsights'

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <WhyChooseUs />
      <FeaturedLawyers />
      <CaseHighlights />
      <Testimonials />
      <ConsultationCTA />
      <BlogInsights />
    </>
  )
}

export default HomePage
