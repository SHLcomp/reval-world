import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Main />
    </div>
  )
}
export default Home;