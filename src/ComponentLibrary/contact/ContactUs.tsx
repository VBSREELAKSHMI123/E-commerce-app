"use client";
import ProductButton from "../../sharedComponents/Button";
import InputField from "../../sharedComponents/InputField";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <Box
      sx={{
        mt: "40px",
        minHeight: "calc(100vh - 40px)",
        m: 5,
      }}
    >
      <Box sx={{ display: "flex", gap: 3, alignItems: "stretch" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 310,
            width: 300,
            p: 5,
            boxShadow: 3,
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: "#DB4444" }}>
              <IoCall />
            </Typography>
            <Typography variant="body2">Call To Us</Typography>
          </Box>
          <Typography sx={{ fontSize: "small", mb: 1 }}>
            We are available 24/7, 7 days a week.
          </Typography>
          <Typography sx={{ fontSize: "small", mb: 1 }}>
            Phone: +8801611112222
          </Typography>
          <Divider sx={{ width: "200px", borderColor: "black", mb: 1 }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography sx={{ color: "#DB4444" }}>
              <MdEmail />
            </Typography>
            <Typography variant="body2">Write To Us</Typography>
          </Box>
          <Typography sx={{ fontSize: "small", mb: 1 }}>
            Fill out our form and we will contact
          </Typography>
          <Typography sx={{ fontSize: "small", mb: 1 }}>
            Email: customer@exclusive.com
          </Typography>
          <Typography sx={{ fontSize: "small", mb: 1 }}>
            Email: support@exclusive.com
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: 3,
            height: 310,
            width: 700,
            boxSizing: "border-box",
            p: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <InputField
              variant="filled"
              label="Name"
              size="small"
              margin="dense"
              sx={{
                "& .MuiInputBase-root": {
                  // height: 36,
                  fontSize: "0.85rem",
                },
                "& .MuiInputBase-root:before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root:width": {
                  borderBottom: "none",
                },
              }}
            />
            <InputField
              variant="filled"
              label="Email"
              size="small"
              margin="dense"
              sx={{
                "& .MuiInputBase-root": {
                  // height: 36,
                  fontSize: "0.85rem",
                },
                "& .MuiInputBase-root:before": {
                  borderBottom: "none",
                },
              }}
            />
            <InputField
              variant="filled"
              label="Phone"
              size="small"
              margin="dense"
              sx={{
                "& .MuiInputBase-root": {
                  // height: 36,
                  fontSize: "0.85rem",
                },
                "& .MuiInputBase-root:before": {
                  borderBottom: "none",
                },
              }}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <InputField
              variant="filled"
              label="Your Message"
              sx={{
                "& .MuiInputBase-root:before": {
                  borderBottom: "none",
                },
                width: 600,
              }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <ProductButton color="#DB4444" textcolor="white">
              send message
            </ProductButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
