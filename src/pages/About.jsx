import React, { useEffect, useState } from "react";
import { fetchPageBySlug } from "../utils/api";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPageBySlug("about").then((res) => {
      if (res) setData(res.acf);
    });
  }, []);

  return (
    <div
      className="container"
      style={{
        paddingTop: "150px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
      }}
    >
      <Helmet>
        <title>About | Mohib Ali</title>
        <meta name="description" content="Learn more about Mohib Ali, his skills, and experience." />
      </Helmet>
      <div>
        {/* Uses WP Data or default */}
        <h1
          style={{
            fontSize: "6vw",
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          {data?.about_headline || "I Build Solutions"}
        </h1>
      </div>
      <div>
        {/* Using dangerouslySetInnerHTML for rich text editor content */}
        <div
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.5,
            color: "#ccc",
            marginBottom: "2rem",
          }}
          dangerouslySetInnerHTML={{
            __html: data?.about_bio || "<p>Loading Bio...</p>",
          }}
        />

        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>STACK</h3>
        <p style={{ color: "#666" }}>
          {data?.skills_list || "Loading Skills..."}
        </p>
      </div>
    </div>
  );
};
export default About;
