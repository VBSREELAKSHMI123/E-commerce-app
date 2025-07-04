import AuthGaurd from "@/ComponentLibrary/AuthGaurd";
import React from "react";

const layout = ({ children }: { children: string }) => {
  return (
    <>
      <AuthGaurd>{children}</AuthGaurd>
    </>
  );
};

export default layout;
