import React from 'react';
import { FaWordpressSimple, FaReact, FaCode } from 'react-icons/fa6';

const data = [
    { icon: <FaWordpressSimple size={40}/>, title: "Custom WordPress", desc: "No builders. I code PHP themes from scratch using ACF Pro." },
    { icon: <FaReact size={40}/>, title: "Frontend React", desc: "Building scalable single page applications with Next.js/Vite." },
    { icon: <FaCode size={40}/>, title: "Interactions", desc: "GSAP & WebGL animations that award juries love." }
];

const Services = () => {
  return (
    <div className="container" style={{padding:'10rem 0'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'3rem'}}>
            {data.map((item, i) => (
                <div key={i} style={{background:'#111', padding:'3rem', borderRadius:'8px', transition:'0.3s'}} className="panel">
                    <div style={{color:'var(--accent)', marginBottom:'1rem'}}>{item.icon}</div>
                    <h3 style={{fontSize:'1.8rem', marginBottom:'1rem'}}>{item.title}</h3>
                    <p style={{color:'#888', lineHeight:1.6}}>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  );
};
export default Services;