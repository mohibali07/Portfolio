import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = ({ loading }) => {
  const container = useRef(null);
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (loading) {
      // Counter Animation
      let ctx = gsap.context(() => {
        let obj = { val: 0 };
        gsap.to(obj, {
          val: 100,
          duration: 2,
          ease: "power2.out",
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
      // Exit Animation
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.to(counterRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        })
          .to(container.current, {
            yPercent: -100,
            duration: 1,
            ease: "expo.inOut",
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
        background: "#050505",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div
        ref={counterRef}
        style={{
          fontSize: "10vw",
          fontWeight: "900",
          fontFamily: "'Syne', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {count}%
      </div>
    </div>
  );
};

export default Preloader;
