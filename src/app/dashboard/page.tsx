import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import DashboardProductList from "../../ComponentLibrary/DashboardProductList";
import DashboardCarousel from "../../sharedComponents/DashboardCarousel";

const page = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: 250,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <DashboardCarousel />
      </Box>
      <Box>
        <DashboardProductList />
      </Box>
    </>
  );
};

export default page;
