"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

const CancelPage = () => {
  const router = useRouter();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        height: "100vh",
        backgroundColor: "#fbeaea",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        style={{
          backgroundColor: "#f44336",
          borderRadius: "50%",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <CloseIcon sx={{ fontSize: 60, color: "#fff" }} />
      </motion.div>

      <Typography variant="h4" gutterBottom sx={{ color: "#c62828" }}>
        Payment Cancelled
      </Typography>

      <Typography variant="body1" sx={{ color: "#b71c1c", mb: 4 }}>
        Your payment was cancelled or failed. You can try again later.
      </Typography>

      <Button
        variant="contained"
        color="error"
        onClick={() => router.push("/dashboard")}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default CancelPage;
