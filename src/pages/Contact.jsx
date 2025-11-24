import React from 'react';
import ContactForm from '../components/ContactForm'; // Import Form

const Contact = () => {
  return (
    <div className="container" style={{paddingTop:'150px', paddingBottom:'100px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(350px, 1fr))', gap:'5rem'}}>
        
        {/* Left Side: Info */}
        <div>
             <h1 style={{fontSize:'5vw', lineHeight:0.9, marginBottom:'2rem'}}>
                LET'S START <br/><span style={{color:'var(--accent)'}}>A PROJECT.</span>
             </h1>
             <p style={{color:'#999', fontSize:'1.1rem', lineHeight:1.6, maxWidth:'400px'}}>
                 Interested in working together? Fill out the form or send me a direct email.
                 I usually respond within 24 hours.
             </p>

             <div style={{marginTop:'4rem'}}>
                 <h4 style={{marginBottom:'1rem', color:'#fff'}}>DIRECT CONTACT</h4>
                 <a href="mailto:mohib@email.com" className="hover-accent" style={{display:'block', fontSize:'1.5rem', marginBottom:'0.5rem'}}>mohib@dev.com</a>
                 <p style={{color:'#666'}}>+92 300 1234567</p>
             </div>
        </div>

        {/* Right Side: Form */}
        <div style={{background:'#111', padding:'3rem', borderRadius:'15px'}}>
            <h3 style={{fontSize:'1.5rem', marginBottom:'1rem'}}>Fill the details</h3>
            <ContactForm />
        </div>

    </div>
  );
};
export default Contact;