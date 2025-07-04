import Navbar from "@/ComponentLibrary/Navbar";
import React from "react";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default CartLayout;
