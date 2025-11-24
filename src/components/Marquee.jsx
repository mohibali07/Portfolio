import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = () => {
  const wrapper = useRef();

  useEffect(() => {
    gsap.to(wrapper.current, {
        xPercent: -50, repeat: -1, duration: 15, ease: "linear"
    });
  }, []);

  const style = { fontSize: '4rem', fontWeight: 'bold', marginRight: '3rem', whiteSpace: 'nowrap', opacity: '0.2', textTransform: 'uppercase' };

  return (
    <div style={{width:'100%', overflow:'hidden', padding:'4rem 0', background: '#0a0a0a', borderTop:'1px solid #111', borderBottom:'1px solid #111'}}>
        <div ref={wrapper} style={{display:'flex', width: '200%'}}>
            <h2 style={style}>WordPress — React JS — GSAP — PHP — WEBGL — LENIS —</h2>
            <h2 style={style}>WordPress — React JS — GSAP — PHP — WEBGL — LENIS —</h2>
        </div>
    </div>
  );
};
export default Marquee;