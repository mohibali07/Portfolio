import React from 'react';

const reviews = [
    { name: "Sarah J.", company: "TechFlow", text: "Mohib transformed our slow WordPress site into a blazing fast machine. His GSAP skills are unmatched." },
    { name: "David K.", company: "Studio One", text: "The best developer we have hired. He understands design and animation better than most frontend devs." },
    { name: "Ali R.", company: "FinPak", text: "Delivered a complex React dashboard ahead of schedule. Highly recommended for React jobs." }
];

const Testimonials = () => {
  return (
    <section className="container" style={{padding:'10rem 0'}}>
       <h2 style={{fontSize:'3vw', marginBottom:'4rem', textTransform:'uppercase'}}>Client Stories</h2>
       <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'2rem'}}>
           {reviews.map((r, i) => (
               <div key={i} style={{padding:'2rem', border:'1px solid #222', borderRadius:'10px'}}>
                   <div style={{fontSize:'1.5rem', marginBottom:'1rem', color:'var(--accent)'}}>"</div>
                   <p style={{marginBottom:'2rem', lineHeight:'1.6', fontSize:'1.1rem'}}>{r.text}</p>
                   <div>
                       <h4 style={{fontSize:'1rem'}}>{r.name}</h4>
                       <span style={{fontSize:'0.8rem', color:'#666', textTransform:'uppercase'}}>{r.company}</span>
                   </div>
               </div>
           ))}
       </div>
    </section>
  );
};
export default Testimonials;