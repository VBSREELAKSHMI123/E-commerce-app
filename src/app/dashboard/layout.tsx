import React from "react";
import { Box } from "@mui/material";
import Sidebar from "@/ComponentLibrary/Sidebar";
import Navbar from "@/ComponentLibrary/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2,
            marginTop: "40px",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
