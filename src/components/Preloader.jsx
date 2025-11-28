import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = ({ loading }) => {
  const container = useRef(null);
  const counterRef = useRef(null);
  const curtainRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (loading) {
      // Counter Animation
      let ctx = gsap.context(() => {
        let obj = { val: 0 };
        gsap.to(obj, {
          val: 100,
          duration: 2.5,
          ease: "power4.inOut",
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          },
        });
      }, container);
      return () => ctx.revert();
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      // Exit Animation (Mind-Blowing Reveal)
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // 1. Counter shoots up
        tl.to(counterRef.current, {
          y: -150,
          opacity: 0,
          duration: 0.8,
          ease: "back.in(1.7)",
        })
          // 2. Curtain splits or slides up
          .to(curtainRef.current, {
            height: 0,
            duration: 1.2,
            ease: "power4.inOut",
            stagger: 0.1,
          })
          .set(container.current, { display: "none" });
      }, container);
      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <div
      ref={container}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none", // Allow clicks to pass through after it hides
      }}
    >
      {/* Background Curtain */}
      <div
        ref={curtainRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#000",
          zIndex: 1,
        }}
      ></div>

      {/* Counter */}
      <div
        ref={counterRef}
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mixBlendMode: "difference", // Cool effect against bg
          color: "#fff",
        }}
      >
        <div
          style={{
            fontSize: "15vw",
            fontWeight: "900",
            fontFamily: "'Syne', sans-serif",
            lineHeight: "0.8",
            letterSpacing: "-5px",
          }}
        >
          {count}
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            letterSpacing: "10px",
            marginTop: "1rem",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          Loading
        </div>
      </div>
    </div>
  );
};

export default Preloader;
