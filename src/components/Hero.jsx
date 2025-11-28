import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ line1, line2, line3, sub }) => {
  const comp = useRef(null);

  // Setup GSAP Animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".h-anim", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  // -- LOGIC: Use props if they exist, otherwise Default Text --
  const text1 = line1 || "Making";
  const text2 = line2 || "Digital";
  const text3 = line3 || "History.";
  const subtitle = sub || "WP & FRONTEND DEVELOPER";

  return (
    <section
      ref={comp}
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "5%",
      }}
    >
      <p
        className="h-anim"
        style={{
          color: "var(--secondary)",
          letterSpacing: "3px",
          marginBottom: "1rem",
          textTransform: "uppercase",
          fontSize: "0.9rem",
          fontWeight: 600,
        }}
      >
        {subtitle}
      </p>

      <h1
        style={{
          fontSize: "9vw",
          fontWeight: "800",
          lineHeight: "0.85",
          textTransform: "uppercase",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="h-anim">{text1}</div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="h-anim" style={{ color: "var(--accent)" }}>
            {text2}
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="h-anim">{text3}</div>
        </div>
      </h1>
    </section>
  );
};

export default Hero;
