import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Neon Ecom", cat: "WooCommerce", img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80" },
  { id: 2, title: "Fintech App", cat: "React", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80" },
  { id: 3, title: "Architecture", cat: "GSAP", img: "https://images.unsplash.com/photo-1481487484168-9b93228308d9?w=800&q=80" },
  { id: 4, title: "Hospital WP", cat: "Theme", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  // Added a 5th project to make the scrolling feel deeper
  { id: 5, title: "Crypto Dash", cat: "Web3", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80" }
];

const HomeWork = () => {
  const comp = useRef();
  const gallery = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

      // 1. Calculate how far to scroll (Width of gallery - Viewport width)
      const totalWidth = gallery.current.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;

      // 2. The Horizontal Scroll Tween
      gsap.to(gallery.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: comp.current, // Wrapper pins
          pin: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          // Scroll duration matches the content width
          end: () => "+=" + amountToScroll 
        }
      });
      
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} style={{overflow:'hidden', background: '#0a0a0a', paddingBottom:'2rem'}}>
       
       {/* Header */}
       <div className="container" style={{paddingTop:'5rem', marginBottom:'3rem', display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
           <div>
                <p style={{color:'var(--accent)', fontWeight:'bold', letterSpacing:'2px', marginBottom:'0.5rem'}}>PORTFOLIO</p>
                <h2 style={{fontSize:'3vw', lineHeight:'1'}}>SELECTED WORKS</h2>
           </div>
           <Link to="/portfolio" className="btn">VIEW ARCHIVE</Link>
       </div>

       {/* Horizontal Strip */}
       {/* Width is AUTO so it grows with content. paddingLeft to align with container */}
       <div ref={gallery} style={{display:'flex', gap:'4rem', width:'fit-content', padding:'0 5vw 0 5vw', height:'60vh', alignItems:'center'}}>
          
          {projects.map((p, i) => (
             <Link to="/portfolio" key={i} className="work-card" style={{
                 minWidth:'30vw', /* Desktop: 3 cards visible roughly */
                 height:'100%', 
                 display:'flex', 
                 flexDirection:'column', 
                 textDecoration:'none',
                 position:'relative'
             }}>
                 {/* Image Wrapper */}
                 <div style={{
                     flex:'1', 
                     overflow:'hidden', 
                     borderRadius:'6px', 
                     position:'relative', 
                     background:'#111',
                     marginBottom:'1.5rem'
                 }}>
                     <img 
                        src={p.img} 
                        alt={p.title} 
                        className="parallax-img" // Targeting class for styling
                        style={{
                            width:'100%', 
                            height:'100%', 
                            objectFit:'cover', 
                            transition: 'transform 0.5s',
                            filter:'grayscale(100%)' // Default BW
                        }} 
                        onMouseEnter={(e) => {
                            e.target.style.filter = "grayscale(0%)";
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.filter = "grayscale(100%)";
                            e.target.style.transform = "scale(1)";
                        }}
                    />
                 </div>
                 
                 {/* Meta Info */}
                 <div>
                    <h3 style={{fontSize:'2rem', textTransform:'uppercase', lineHeight:'1', marginBottom:'0.5rem'}}>{p.title}</h3>
                    <div style={{display:'flex', gap:'10px'}}>
                         <span style={{fontSize:'0.8rem', border:'1px solid #333', padding:'4px 10px', borderRadius:'20px', color:'#888'}}>2024</span>
                         <span style={{fontSize:'0.8rem', color:'var(--accent)', paddingTop:'5px', textTransform:'uppercase', fontWeight:'600'}}>{p.cat}</span>
                    </div>
                 </div>

                 {/* Big Number Backdrop */}
                 <div style={{
                     position:'absolute', top:'-40px', right:'10px', 
                     fontSize:'6rem', fontWeight:'800', opacity:0.05, 
                     zIndex:-1, fontFamily:'sans-serif'
                 }}>
                     0{i+1}
                 </div>

             </Link>
          ))}
          
          {/* A Final Card leading to "See All" */}
          <Link to="/portfolio" style={{
                minWidth:'20vw', 
                height:'100%', 
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center',
                borderLeft:'1px solid #222',
                paddingLeft: '4rem'
            }}>
             <div style={{
                 width:'150px', height:'150px', 
                 border:'1px solid var(--accent)', borderRadius:'50%', 
                 display:'flex', justifyContent:'center', alignItems:'center',
                 color:'var(--accent)', fontSize:'1.2rem', fontWeight:'bold',
                 textTransform:'uppercase',
                 transition: '0.3s'
             }} 
             onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color='#000'; }}
             onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color='var(--accent)'; }}
             >
                 View All
             </div>
          </Link>
          
       </div>
    </section>
  );
};

export default HomeWork;