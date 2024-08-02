import HeroSection from "../HeroSection";
import React from 'react'
import Myskills from "../Myskills";
import AboutMe from "../AboutMe";
import Myportfolio from "../Myportfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

function index() {
  return (
    <div>
      <HeroSection/>
      <Myskills/>
      <AboutMe/>
      <Myportfolio/>
      <Testimonial/>
      <ContactMe/>
      <Footer/>
      </div>
  )
}

export default index
