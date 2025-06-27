"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const DashboardCarousel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        mt: 5, 
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
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
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={false}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 250,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Image
                alt={`img${i}`}
                width={800}
                height={250}
                src="/images/Frame560.png"
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
