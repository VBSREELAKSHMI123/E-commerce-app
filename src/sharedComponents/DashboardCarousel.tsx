'use client';
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const DashboardCarousel = () => {
  const images = [
    "/images/Frame560.png",
    "/images/Frame600.png",
    "/images/Frame685.png"
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        mt: 5,
      }}
    >
      <Carousel
        arrows
        autoPlay
        autoPlaySpeed={3000}
        infinite
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        }}
        showDots
        swipeable
        draggable
        containerClass="carousel-container"
      >
        {images.map((src, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
              
            }}
          >
            <Image
              alt={`img${i}`}
              width={700}
              height={200}
              src={src}
              style={{
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default DashboardCarousel;
