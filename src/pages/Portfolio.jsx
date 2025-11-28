import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Link is NO LONGER USED for the wrapper since we use <a> tag for external links
import { fetchPortfolio } from "../utils/api";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. DYNAMIC CATEGORY STATE
  const [categories, setCategories] = useState(["all"]);

  const gridRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const formatted = await fetchPortfolio();
      setAllProjects(formatted);
      setProjects(formatted);

      const tags = formatted.map((p) => p.tag);
      const uniqueCategories = ["all", ...new Set(tags)];
      setCategories(uniqueCategories);

      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    if (loading) return;

    if (filter === "all") {
      setProjects(allProjects);
    } else {
      setProjects(allProjects.filter((p) => p.tag === filter));
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filter, loading]);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
        }}
      >
        <h2 style={{ color: "var(--accent)", letterSpacing: "2px" }}>
          LOADING PROJECTS...
        </h2>
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "150px",
        paddingBottom: "100px",
        background: "#050505",
      }}
    >
      <Helmet>
        <title>Portfolio | Mohib Ali</title>
        <meta name="description" content="Selected works and projects by Mohib Ali." />
      </Helmet>
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            SELECTED WORKS
          </p>
          <h1
            style={{
              fontSize: "8vw",
              textTransform: "uppercase",
              lineHeight: "0.9",
            }}
          >
            DIGITAL <span style={{ color: "#333" }}>ARCHIVE.</span>
          </h1>
        </div>

        {/* DYNAMIC FILTERS */}
        <div
          style={{
            marginBottom: "4rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                background: filter === cat ? "#fff" : "transparent",
                color: filter === cat ? "#000" : "#fff",
                borderColor: filter === cat ? "#fff" : "#333",
                // textTransform makes "wordpress" look like "WORDPRESS"
                textTransform: "uppercase",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SUB COMPONENT WITH REAL LINKS ---
const ProjectCard = ({ project }) => {
  const cardRef = useRef();
  const contentRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    gsap.to(contentRef.current, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(contentRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      className="project-card"
      style={{ perspective: "1000px", cursor: "pointer" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      {/* LINK WRAPPER: Opens project.link in new tab */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", textDecoration: "none" }}
      >
        <div
          ref={contentRef}
          style={{
            background: "#0e0e0e",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #222",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "6px",
              marginBottom: "15px",
              opacity: 0.3,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#fff",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#fff",
              }}
            ></div>
          </div>

          <div
            style={{
              overflow: "hidden",
              borderRadius: "8px",
              marginBottom: "1.5rem",
              height: "280px",
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ transform: "translateZ(30px)" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "0.3rem",
                    lineHeight: 1.1,
                    color: "#fff",
                  }}
                  dangerouslySetInnerHTML={{ __html: project.title }}
                />
                <p
                  style={{
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    letterSpacing: "1px",
                    fontWeight: 600,
                  }}
                >
                  {project.cat}
                </p>
              </div>

              {/* Visual indicator that it is a link */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #333",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "rotate(-45deg)",
                  background: "#000",
                }}
              >
                ➜
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
