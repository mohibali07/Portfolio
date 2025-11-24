import React from 'react';

const steps = [
  { id: '01', title: 'DISCOVERY', desc: 'We dissect your brand and user goals. No assumptions, just data-backed strategy.' },
  { id: '02', title: 'BUILD', desc: 'Custom WordPress or React architecture. Clean code, perfect semantic structure.' },
  { id: '03', title: 'ANIMATION', desc: 'GSAP implementation to make elements breathe and feel alive.' },
  { id: '04', title: 'LAUNCH', desc: 'Performance optimization, SEO checks, and smooth deployment to production.' },
];

const Process = () => {
  return (
    <section className="container" style={{padding: '10rem 0'}}>
      <h2 style={{fontSize:'3rem', marginBottom:'5rem'}}>MY PROCESS</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem', borderTop:'1px solid #333', paddingTop:'2rem'}}>
        {steps.map((step) => (
           <div key={step.id}>
              <span style={{color:'var(--accent)', fontSize:'1.2rem', fontWeight:'bold', display:'block', marginBottom:'1rem'}}>
                  /{step.id}
              </span>
              <h3 style={{fontSize:'1.8rem', marginBottom:'1rem'}}>{step.title}</h3>
              <p style={{color:'#888', lineHeight:'1.5'}}>{step.desc}</p>
           </div>
        ))}
      </div>
    </section>
  );
};
export default Process;