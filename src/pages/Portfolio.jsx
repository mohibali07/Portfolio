import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register
gsap.registerPlugin(ScrollTrigger);

// --- 1. THE DATA (Add your website screenshots here) ---
const allProjects = [
  { id: 1, title: "Neon Commerce", cat: "WooCommerce", tag: "wp", img: "https://images.unsplash.com/photo-1481487484168-9b93228308d9?w=1000&q=80" },
  { id: 2, title: "Fintech App", cat: "React App", tag: "react", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80" },
  { id: 3, title: "Architect Studio", cat: "GSAP Animation", tag: "custom", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80" },
  { id: 4, title: "Cyber Agency", cat: "Next.js", tag: "react", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80" },
  { id: 5, title: "Medical Theme", cat: "WordPress", tag: "wp", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80" },
  { id: 6, title: "Luxury Estate", cat: "Web Design", tag: "custom", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1000&q=80" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState(allProjects);
  const gridRef = useRef();

  // --- FILTER LOGIC ---
  useEffect(() => {
    if (filter === 'all') {
      setProjects(allProjects);
    } else {
      setProjects(allProjects.filter(p => p.tag === filter));
    }
    
    // Animate items whenever grid changes
    const ctx = gsap.context(() => {
        gsap.fromTo(".project-card", 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
        );
    }, gridRef);
    return () => ctx.revert();
  }, [filter]);


  return (
    <div style={{minHeight:'100vh', paddingTop:'150px', paddingBottom:'100px', background:'#050505'}}>
        <div className="container">
            
            {/* --- HEADER --- */}
            <div style={{marginBottom:'4rem'}}>
                <p style={{color:'var(--accent)', fontWeight:'bold', letterSpacing:'2px'}}>SELECTED WORKS</p>
                <h1 style={{fontSize:'8vw', textTransform:'uppercase', lineHeight:'0.9'}}>
                    DIGITAL <span style={{color:'#333'}}>ARCHIVE.</span>
                </h1>
            </div>

            {/* --- FILTERS --- */}
            <div style={{marginBottom:'4rem', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                {['all', 'wp', 'react', 'custom'].map((f) => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)} 
                        className="btn"
                        style={{
                            background: filter === f ? '#fff' : 'transparent',
                            color: filter === f ? '#000' : '#fff',
                            borderColor: filter === f ? '#fff' : '#333'
                        }}
                    >
                        {f === 'wp' ? 'WordPress' : f.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* --- 3D GRID --- */}
            <div ref={gridRef} className="project-grid">
                {projects.map((p) => (
                   <ProjectCard key={p.id} project={p} />
                ))}
            </div>

        </div>
    </div>
  );
};

// --- SUB-COMPONENT: 3D TILT CARD ---
const ProjectCard = ({ project }) => {
    const cardRef = useRef();
    const contentRef = useRef();

    const handleMouseMove = (e) => {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        // Calculate center
        const x = (e.clientX - left - width / 2) / 25; // /25 reduces intensity
        const y = (e.clientY - top - height / 2) / 25;

        gsap.to(contentRef.current, {
            rotationY: x,  // Rotate horizontal
            rotationX: -y, // Rotate vertical
            transformPerspective: 1000,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(contentRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
        });
    };

    return (
        <div 
            className="project-card"
            style={{perspective: '1000px', cursor:'pointer'}} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <Link to="#" style={{display:'block'}}>
                {/* INNER MOVING CONTENT */}
                <div 
                    ref={contentRef}
                    style={{
                        background:'#0e0e0e', 
                        padding:'20px', 
                        borderRadius:'12px',
                        border: '1px solid #222',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {/* BROWSER BAR (Aesthetics) */}
                    <div style={{display:'flex', gap:'5px', marginBottom:'15px', opacity:0.3}}>
                        <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'#fff'}}></div>
                        <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'#fff'}}></div>
                        <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'#fff'}}></div>
                    </div>

                    {/* IMAGE */}
                    <div style={{overflow:'hidden', borderRadius:'8px', marginBottom:'1.5rem', height:'300px'}}>
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            style={{width:'100%', height:'100%', objectFit:'cover'}} 
                        />
                    </div>

                    {/* TEXT INFO */}
                    <div style={{transform: 'translateZ(20px)'}}> 
                        {/* transformZ makes text float above image in 3D */}
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                            <div>
                                <h3 style={{fontSize:'2rem', marginBottom:'0.2rem'}}>{project.title}</h3>
                                <p style={{color:'var(--accent)', textTransform:'uppercase', fontSize:'0.8rem', letterSpacing:'1px'}}>{project.cat}</p>
                            </div>
                            <div style={{
                                width:'40px', height:'40px', borderRadius:'50%', 
                                border:'1px solid #fff', display:'flex', alignItems:'center', justifyContent:'center',
                                transform: 'rotate(-45deg)'
                            }}>➜</div>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default Portfolio;