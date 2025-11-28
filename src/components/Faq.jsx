import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import gsap from "gsap";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const h = isOpen ? "auto" : 0;
    const o = isOpen ? 1 : 0;
    gsap.to(contentRef.current, { height: h, opacity: o, duration: 0.3 });
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: "1px solid #333",
        paddingBottom: "2rem",
        marginBottom: "2rem",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
          {item.question}
        </h3>{" "}
        {/* Note: using 'item.question' from ACF */}
        <div style={{ color: isOpen ? "var(--accent)" : "#fff" }}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <p style={{ paddingTop: "1rem", color: "#888", lineHeight: "1.6" }}>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = ({ items }) => {
  // Fallback if data is missing
  const content =
    items && items.length > 0
      ? items
      : [
          {
            question: "How long does it take?",
            answer: "Typically 2-4 weeks for a standard project.",
          },
          {
            question: "Do you use Templates?",
            answer: "No, everything is custom coded.",
          },
        ];

  return (
    <section className="container" style={{ padding: "5rem 0" }}>
      <h2
        style={{
          fontSize: "3vw",
          marginBottom: "4rem",
          textTransform: "uppercase",
        }}
      >
        Common Questions
      </h2>
      <div>
        {content.map((f, i) => (
          <FaqItem key={i} item={f} />
        ))}
      </div>
    </section>
  );
};
export default Faq;
