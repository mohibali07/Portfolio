import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".h-anim", { 
          y: 100, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} style={{height: '90vh', display: 'flex', flexDirection:'column', justifyContent: 'center', paddingLeft: '5%'}}>
       <p className="h-anim" style={{color:'var(--secondary)', letterSpacing:'2px', marginBottom:'1rem'}}>WP & FRONTEND DEVELOPER</p>
       <h1 style={{fontSize: '9vw', fontWeight: '800', lineHeight: '0.85', textTransform:'uppercase'}}>
         <div className="h-anim">Making</div>
         <div className="h-anim" style={{color: 'var(--accent)'}}>Digital</div>
         <div className="h-anim">History.</div>
       </h1>
    </section>
  );
};
export default Hero;