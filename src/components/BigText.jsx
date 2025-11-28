import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BigText = () => {
  const textRef = useRef();
  
  useLayoutEffect(() => {
     gsap.fromTo(textRef.current, 
       { x: 1000 }, 
       { x: -1000, scrollTrigger: { trigger: document.body, start:"top top", end: "bottom bottom", scrub: 1 } }
     );
  }, []);

  return (
    <div style={{padding:'5rem 0', overflow:'hidden', opacity: 0.1, pointerEvents:'none'}}>
       <h1 ref={textRef} style={{fontSize:'25vw', whiteSpace:'nowrap', lineHeight:0.8, fontWeight:800}}>
           WORDPRESS REACT
       </h1>
    </div>
  );
};
export default BigText;