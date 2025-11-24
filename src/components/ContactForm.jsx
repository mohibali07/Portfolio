import React from 'react';

const ContactForm = () => {
  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #333',
    padding: '15px 0',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: '0.3s'
  };

  const handleFocus = (e) => e.target.style.borderBottom = "1px solid var(--accent)";
  const handleBlur = (e) => e.target.style.borderBottom = "1px solid #333";

  return (
    <form style={{marginTop:'3rem', display:'grid', gap:'2rem'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
        <div>
          <label style={{display:'block', fontSize:'0.8rem', color:'#666', textTransform:'uppercase'}}>Name</label>
          <input type="text" placeholder="John Doe" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}/>
        </div>
        <div>
           <label style={{display:'block', fontSize:'0.8rem', color:'#666', textTransform:'uppercase'}}>Email</label>
           <input type="email" placeholder="john@example.com" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}/>
        </div>
      </div>
      
      <div>
         <label style={{display:'block', fontSize:'0.8rem', color:'#666', textTransform:'uppercase'}}>Service</label>
         <select style={{...inputStyle, color:'#888'}}>
             <option>WordPress Development</option>
             <option>React Application</option>
             <option>Animation / GSAP</option>
             <option>Other</option>
         </select>
      </div>

      <div>
          <label style={{display:'block', fontSize:'0.8rem', color:'#666', textTransform:'uppercase'}}>Message</label>
          <textarea rows="4" placeholder="Tell me about your project..." style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}></textarea>
      </div>

      <button type="submit" className="btn" style={{marginTop:'2rem', background:'#fff', color:'#000', border:'none', cursor:'pointer', fontWeight:'bold'}}>
          SEND MESSAGE
      </button>
    </form>
  );
};
export default ContactForm;