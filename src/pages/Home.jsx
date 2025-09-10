import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Why from '../components/whyus/Why';
import Gallery from '../components/gallery/Gallery';
import Projects from '../components/projects/Projects';
import Stats from '../components/stats/Stats';
import ContactForm from '../components/contactForm/ContactForm';
import ContactInfo from '../components/contactInfo/ContactInfo';
import Footer from '../components/footer/Footer';
import Location from '../components/location/Location';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
        <Why />
        <Gallery/>
        <Projects />
        <Stats />
        <ContactForm />
        <ContactInfo />
        <Location />
        <Footer />
    </div>
  )
}
export default Home;