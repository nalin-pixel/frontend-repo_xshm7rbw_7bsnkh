import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { WhatWeDo, SelectedWork, WhyFledge, Testimonials, FinalCTA } from '../components/Sections'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <SelectedWork />
      <WhyFledge />
      <Testimonials />
      <FinalCTA />
    </Layout>
  )
}
