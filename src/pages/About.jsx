import React from 'react';
const About = () => {
  return (
    <div className="container" style={{paddingTop:'150px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem'}}>
        <div>
             <h1 style={{fontSize:'6vw', lineHeight:0.9}}>I BUILD <br/><span style={{color:'var(--accent)'}}>SOLUTIONS.</span></h1>
        </div>
        <div>
            <p style={{fontSize:'1.2rem', lineHeight:1.5, color:'#ccc', marginBottom:'2rem'}}>
                I am a 20-year-old Full Stack Developer specializing in WordPress and React. 
                I don't just rely on themes; I build custom digital engines that drive business growth.
            </p>
            <h3 style={{fontSize:'1.5rem', marginBottom:'1rem'}}>STACK</h3>
            <p style={{color:'#666'}}>JavaScript, React, Next.js, Node.js</p>
            <p style={{color:'#666'}}>PHP, WordPress (Headless/Theme), WooCommerce</p>
            <p style={{color:'#666'}}>GSAP, Lenis, Framer Motion</p>
        </div>
    </div>
  );
};
export default About;