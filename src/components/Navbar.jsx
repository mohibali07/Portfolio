import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{
        position: 'fixed', top: 0, width: '100%', padding: '2rem 5%', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        zIndex: 100, mixBlendMode: 'difference'
    }}>
      <Link to="/" style={{fontSize:'1.5rem', fontWeight:'800', letterSpacing:'-1px'}}>MOHIB.DEV</Link>
      <div style={{display:'flex', gap:'3rem', alignItems:'center'}}>
         <Link to="/about" className="hover-accent" style={{fontSize:'0.9rem', fontWeight:'600'}}>ABOUT</Link>
         <Link to="/portfolio" className="hover-accent" style={{fontSize:'0.9rem', fontWeight:'600'}}>WORK</Link>
         <Link to="/contact" className="hover-accent" style={{fontSize:'0.9rem', fontWeight:'600'}}>CONTACT</Link>
      </div>
    </nav>
  );
};
export default Navbar;