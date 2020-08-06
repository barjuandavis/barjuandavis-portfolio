import React from "react"
import Layout from "../components/layout"
import IntroSection from "../components/sections/introsection"
import AboutSection from "../components/sections/aboutsection"
import PortfolioSection from "../components/sections/portfoliosection"
import ContactSection from "../components/sections/contactsection"
import SEO from '../components/seo'

export default () => (
    <Layout>
       <SEO title="Home" keywords={[
          `developer`, 
          `application`,
          `full stack`,
          `barjuan davis`,
          `barjuandavis`,
          `mobile`]} />
       <section className="intro">
          <IntroSection />
       </section>
       <section className="about" id="about">
          <AboutSection />
       </section>
       <section className="portfolio" id="portfolio">
         <PortfolioSection />
       </section>
       <section className="contact" id="contact">
         <ContactSection />
       </section>
    </Layout>
  )