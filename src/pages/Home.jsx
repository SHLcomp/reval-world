import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Why from '../components/whyus/Why';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
        <Why />
    </div>
  )
}
export default Home;