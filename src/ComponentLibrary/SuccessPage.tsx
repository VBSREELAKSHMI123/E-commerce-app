"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { clearCart } from "./redux/slices/CartReducer";
import { placeOrder } from "./redux/slices/OrderReducer";
import { ProductType } from "./redux/slices/CartReducer";

export default function SuccessPage() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const customerData = sessionStorage.getItem("customerInfo");
    const cartData = sessionStorage.getItem("cartItems");

    if (customerData && cartData) {
      const customers = JSON.parse(customerData);
      const items: ProductType[] = JSON.parse(cartData);

      dispatch(
        placeOrder({
          items,
          customers,
          paymentStatus: "success",
        })
      );

      dispatch(clearCart());

      // Optional cleanup
      sessionStorage.removeItem("customerInfo");
      sessionStorage.removeItem("cartItems");
    }

    const timer = setTimeout(() => {
      setDimensions({ width: 0, height: 0 });
      router.push("/dashboard");
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Confetti width={dimensions.width} height={dimensions.height} />
      <h1 style={{ color: "green", fontSize: "2rem" }}>
        🎉 Payment Successful!
      </h1>
      <p style={{ fontSize: "1.2rem" }}>Thank you for your purchase.</p>
    </div>
  );
}
