"use client";
import React from "react";

type PayWithStripeProps = {
    amount: number;
    name: string;
};

export default function PayWithStripe({ amount,name }: PayWithStripeProps) {
  const handleClick = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount,name }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Failed to create Stripe Checkout session.");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "12px 24px",
        backgroundColor: "#DB4444",
        color: "white",
        fontWeight: "bold",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Pay ${(amount / 100).toFixed(2)}
    </button>
  );
}
