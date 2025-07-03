import Navbar from "@/ComponentLibrary/Navbar";
import React from "react";

const layout = ({ children }: { children: string }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
