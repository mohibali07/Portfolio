import React, { useEffect, useState } from "react";
import { fetchPortfolio } from "../utils/api";

const Debug = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio()
      .then((res) => setData(res))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "100px", background: "#fff", color: "#000", minHeight: "100vh" }}>
      <h1>Debug Page</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!data && <p>Loading...</p>}
      {data && (
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          {JSON.stringify(data.slice(0, 3), null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Debug;
