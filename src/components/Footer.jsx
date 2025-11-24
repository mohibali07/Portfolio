import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container" style={{padding:'5rem 0', textAlign:'center', borderTop:'1px solid #222'}}>
        <p style={{color:'#666', marginBottom:'1rem'}}>GOT A PROJECT?</p>
        <Link to="/contact">
            <h2 style={{fontSize:'5vw', borderBottom:'2px solid var(--accent)', display:'inline-block', lineHeight:'1'}}>
                LET'S TALK.
            </h2>
        </Link>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'4rem', color:'#444', fontSize:'0.8rem'}}>
            <span>© 2025 MOHIB ALI</span>
            <span>DEVELOPED WITH REACT + GSAP</span>
        </div>
    </footer>
  );
};
export default Footer;