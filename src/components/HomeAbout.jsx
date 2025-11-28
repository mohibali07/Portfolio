import React from "react";
import { FaGlobe, FaClock, FaLaptop } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <section
      className="container"
      style={{ padding: "8rem 0", borderBottom: "1px solid #222" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left Column: Typography */}
        <div>
          <span
            style={{
              color: "var(--accent)",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            THE DIGITAL ATELIER
          </span>
          <h2
            style={{
              fontSize: "3rem",
              textTransform: "uppercase",
              lineHeight: "1.1",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            Where Code meets <br />
            <span style={{ color: "#666" }}>Architecture.</span>
          </h2>
          <p
            style={{
              color: "#999",
              lineHeight: "1.7",
              fontSize: "1.1rem",
              marginBottom: "3rem",
            }}
          >
            I don't believe in "Just Websites". I believe in digital ecosystems.
            Using the power of Headless WordPress, I architect solutions that
            are secure by default, blazing fast by design, and visually
            hypnotic.
          </p>

          {/* Mini Stats */}
          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <h3 style={{ fontSize: "2.5rem", color: "#fff" }}>3+</h3>
              <span
                style={{
                  color: "#666",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                }}
              >
                Years Exp
              </span>
            </div>
            <div>
              <h3 style={{ fontSize: "2.5rem", color: "#fff" }}>100%</h3>
              <span
                style={{
                  color: "#666",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                }}
              >
                Success
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div
            style={{
              background: "#111",
              padding: "2rem",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #222",
            }}
          >
            <FaGlobe size={30} color="#fff" />
            <span
              style={{ marginTop: "10px", fontSize: "0.8rem", color: "#888" }}
            >
              GLOBAL CLIENTS
            </span>
          </div>
          <div
            style={{
              background: "#1a1a1a",
              padding: "2rem",
              borderRadius: "15px",
              gridRow: "span 2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              border: "1px solid #222",
              minHeight: "200px",
            }}
          >
            <span style={{ fontSize: "4rem", lineHeight: 1 }}>WP</span>
            <span style={{ fontSize: "0.8rem", color: "#888" }}>
              HEADLESS ENGINE
            </span>
          </div>
          <div
            style={{
              background: "#111",
              padding: "2rem",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #222",
            }}
          >
            <FaClock size={30} color="#fff" />
            <span
              style={{ marginTop: "10px", fontSize: "0.8rem", color: "#888" }}
            >
              FAST DELIVERY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
