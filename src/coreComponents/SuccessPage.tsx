"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import {clearCart} from '..//coreComponents/redux/slices/CartReducer'
import { useRouter } from "next/navigation";

export default function SuccessPage() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const dispatch = useDispatch()
    const router = useRouter()

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => {
        setDimensions({ width: 0, height: 0 });
        router.push("/dashboard");
    }, 5000);
   dispatch(clearCart())
      return () => clearTimeout(timer); 
      
  }, [router,dispatch]);

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
