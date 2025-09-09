import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Why from '../components/whyus/Why';
import Gallery from '../components/gallery/Gallery';
import Projects from '../components/projects/Projects';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
        <Why />
        <Gallery/>
        <Projects />
    </div>
  )
}
export default Home;