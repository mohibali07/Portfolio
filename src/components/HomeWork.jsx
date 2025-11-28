import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { fetchPortfolio } from "../utils/api";

gsap.registerPlugin(ScrollTrigger);

const HomeWork = () => {
  const [projects, setProjects] = useState([]);
  const comp = useRef();
  const gallery = useRef();

  useEffect(() => {
    fetchPortfolio(5).then((data) => {
      setProjects(data);
    });
  }, []);

  useLayoutEffect(() => {
    if (projects.length === 0) return;

    let ctx = gsap.context(() => {
      const totalWidth = gallery.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const amountToScroll = totalWidth - windowWidth + 100;

      gsap.to(gallery.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: comp.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
        },
      });
    }, comp);
    return () => ctx.revert();
  }, [projects]);

  // NEW HELPER: Handles broken images automatically
  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"; // The fallback
  };

  if (projects.length === 0) return null;

  return (
    <section ref={comp} style={{ overflow: "hidden", background: "#0a0a0a" }}>
      <div
        className="container"
        style={{
          paddingTop: "5rem",
          paddingBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            PORTFOLIO
          </p>
          <h2
            style={{
              fontSize: "3vw",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            Selected Works
          </h2>
        </div>
        <Link to="/portfolio" className="btn">
          VIEW ARCHIVE
        </Link>
      </div>

      <div
        ref={gallery}
        style={{
          display: "flex",
          width: "fit-content",
          padding: "0 5vw",
          height: "60vh",
          alignItems: "center",
          gap: "5vw",
        }}
      >
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            className="work-card"
            style={{
              minWidth: "35vw",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              position: "relative",
            }}
          >
            <div
              style={{
                flex: "1",
                overflow: "hidden",
                borderRadius: "8px",
                position: "relative",
                background: "#111",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                onError={handleImageError} // <--- AUTO FIX
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "0.5s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = "grayscale(0%)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = "grayscale(100%)";
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
            <h3
              style={{
                fontSize: "1.8rem",
                color: "#fff",
                textTransform: "uppercase",
              }}
              dangerouslySetInnerHTML={{ __html: p.title }}
            />
            <p
              style={{
                color: "var(--accent)",
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}
            >
              {p.cat}
            </p>
            <span
              style={{
                position: "absolute",
                top: "-20px",
                right: 0,
                fontSize: "6rem",
                opacity: 0.05,
                fontWeight: 900,
                color: "#fff",
              }}
            >
              0{i + 1}
            </span>
          </a>
        ))}

        <Link
          to="/portfolio"
          style={{
            minWidth: "20vw",
            height: "100%",
            borderLeft: "1px solid #333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            VIEW ALL
          </div>
        </Link>
        <div style={{ width: "100px" }}></div>
      </div>
    </section>
  );
};
export default HomeWork;
