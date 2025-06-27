"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Box } from "@mui/material";

const DashboardCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: 250,
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        showDots
        swipeable
        draggable
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              
            }}
          >
            <Image
              src="/images/Frame685.png"
              alt={`Slide ${i}`}
              width={800}
              height={250}
              style={{
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default DashboardCarousel;
