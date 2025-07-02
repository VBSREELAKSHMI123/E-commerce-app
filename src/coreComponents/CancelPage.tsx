"use client";

import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function CancelPage() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const timer = setTimeout(() => {
      setDimensions({ width: 0, height: 0 });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {/* Red-themed Confetti (simulate failure) */}
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        colors={["#FF0000", "#8B0000", "#B22222"]}
        numberOfPieces={150}
      />

      <h1 style={{ color: "red", fontSize: "2rem" }}>❌ Payment Failed</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Something went wrong. Please try again.
      </p>
    </div>
  );
}
