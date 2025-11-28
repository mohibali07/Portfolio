import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBolt, FaLayerGroup, FaShieldAlt, FaStar } from "react-icons/fa"; // Icons

gsap.registerPlugin(ScrollTrigger);

// DEFAULT DATA (Used if WordPress has no data yet)
const defaultData = [
  {
    title: "LIGHTNING",
    subtitle: "PERFORMANCE",
    desc: "I optimize Core Web Vitals to hit 98+ scores using Next.js & Server Side Rendering.",
    accent: "#ff3c00",
  },
  {
    title: "AESTHETIC",
    subtitle: "PIXEL PERFECT",
    desc: "Every interaction uses GSAP easing to feel 'expensive' and smooth.",
    accent: "#00d2ff",
  },
  {
    title: "HEADLESS",
    subtitle: "ARCHITECTURE",
    desc: "Decoupling WordPress from React ensures your site never gets hacked.",
    accent: "#6eff00",
  },
];

const StackCards = ({ items }) => {
  const container = useRef();

  // -- LOGIC: PROCESS WP DATA OR USE DEFAULT --
  // If "items" comes from WP, map it. Otherwise use default.
  const cardsToRender =
    items && items.length > 0
      ? items.map((item, index) => ({
          id: index,
          title: item.card_title || "Untitled",
          subtitle: item.card_subtitle || "Feature",
          desc: item.card_desc || "No description provided.",
          // Assign colors based on index (Cycle through Red, Cyan, Green)
          accent: index === 0 ? "#ff3c00" : index === 1 ? "#00d2ff" : "#6eff00",
        }))
      : defaultData.map((d, i) => ({ ...d, id: i }));

  // Icons array to map (Since we can't send Icons from WP easily)
  const icons = [<FaBolt />, <FaLayerGroup />, <FaShieldAlt />, <FaStar />];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card");

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: `+=${cards.length * 500}`,
        pin: true,
        scrub: 1,
        animation: gsap.from(cards, {
          y: window.innerHeight,
          rotateX: -20,
          opacity: 0,
          stagger: 0.5,
          duration: 1,
          transformOrigin: "center top",
        }),
      });
    }, container);
    return () => ctx.revert();
  }, [cardsToRender]); // Re-run animation if data changes

  return (
    <section
      ref={container}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      <div
        className="container"
        style={{
          position: "absolute",
          top: "8%",
          zIndex: 0,
          textAlign: "center",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "var(--accent)",
            fontWeight: "bold",
            letterSpacing: "4px",
            marginBottom: "1rem",
          }}
        >
          THE EDGE
        </p>
        <h2 style={{ fontSize: "3vw", textTransform: "uppercase" }}>
          Why Clients Choose Me
        </h2>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cardsToRender.map((item, i) => (
          <div
            key={i}
            className="stack-card"
            style={{
              position: "absolute",
              width: "85vw",
              maxWidth: "900px",
              height: "55vh",
              background: "linear-gradient(145deg, #111, #0a0a0a)",
              border: "1px solid #222",
              boxShadow: "0 50px 100px -20px rgba(0,0,0,1)",
              borderRadius: "24px",
              padding: "3rem 4rem",
              display: "flex",
              justifyContent: "space-between",
              overflow: "hidden",
              zIndex: i + 1,
            }}
          >
            {/* CONTENT */}
            <div
              style={{
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                paddingRight: "2rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: `rgba(255,255,255,0.05)`,
                    border: `1px solid ${item.accent}`,
                    color: item.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {/* Safe Icon Fallback */}
                  {icons[i] || <FaStar />}
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: item.accent,
                    letterSpacing: "2px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {item.subtitle}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "4.5rem",
                    lineHeight: "0.9",
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    letterSpacing: "-2px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#888",
                    lineHeight: "1.7",
                    maxWidth: "450px",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: item.accent,
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{ height: "1px", width: "100%", background: "#222" }}
                ></div>
                <span style={{ fontSize: "0.8rem", color: "#444" }}>
                  SPEC_0{i + 1}
                </span>
              </div>
            </div>

            {/* VISUALS */}
            <div
              style={{
                position: "absolute",
                right: "-20px",
                top: "-40px",
                lineHeight: "0.8",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              <span
                style={{
                  fontSize: "20rem",
                  fontWeight: "900",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(255,255,255,0.03)",
                }}
              >
                0{i + 1}
              </span>
            </div>

            {/* NOISE */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundSize: "40px 40px",
                backgroundImage:
                  "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
                zIndex: 1,
                opacity: 0.3,
                pointerEvents: "none",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackCards;
