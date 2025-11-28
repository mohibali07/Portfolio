import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const Services = ({ items }) => {
  // Logic: If WP returns an array, use it. Else show null (empty), or static fallback.
  // We check if "items" exists and is an array with length.

  const hasData = items && Array.isArray(items) && items.length > 0;

  const content = hasData
    ? items
    : [
        {
          service_title: "WordPress Development",
          service_desc: "We build high performance custom themes.",
        },
        {
          service_title: "React Applications",
          service_desc: "Scalable frontend architectures.",
        },
        {
          service_title: "Interaction Design",
          service_desc: "Award winning GSAP animations.",
        },
      ];

  const icons = [
    <FaCode size={40} />,
    <FaLaptopCode size={40} />,
    <FaMobileAlt size={40} />,
  ];

  return (
    <div className="container" style={{ padding: "10rem 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
        }}
      >
        {content.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#111",
              padding: "3rem",
              borderRadius: "8px",
              border: "1px solid #222",
            }}
          >
            <div style={{ color: "var(--accent)", marginBottom: "1rem" }}>
              {icons[i % 3]}
            </div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              {item.service_title}
            </h3>
            <p style={{ color: "#888", lineHeight: 1.6 }}>
              {item.service_desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
