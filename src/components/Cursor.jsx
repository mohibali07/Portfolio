import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      style={{
        position: 'fixed', top:0, left:0, width: '15px', height: '15px', 
        background: '#fff', borderRadius: '50%', pointerEvents: 'none', 
        zIndex: 9999, transform: 'translate(-50%, -50%)', mixBlendMode: 'difference' 
      }} 
    />
  );
};
export default Cursor;