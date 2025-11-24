import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import HomeWork from '../components/HomeWork';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials'; // <--- NEW IMPORT

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <div className="container">
          <p style={{fontSize:'1.5rem', maxWidth:'800px', margin: '8rem 0', lineHeight: '1.6'}}>
              I am Mohib, a 20-year-old creative developer. I bridge the gap between 
              <span style={{color:'var(--accent)'}}> robust backend architecture</span> and 
              <span style={{color:'var(--accent)'}}> immersive frontend experiences</span>. 
          </p>
      </div>
      <HomeWork />
      <Services />
      <Testimonials />
    </>
  );
};
export default Home;