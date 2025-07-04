// sharedComponents/EmptyCart.tsx
"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const EmptyCart = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      {/* Animated Shopping Cart Emoji */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        style={{ fontSize: "5rem" }}
      >
        🛒
      </motion.div>

      <Typography
        variant="h5"
        component={motion.h5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        sx={{ mt: 2, color: "#555" }}
      >
        Your Cart is Empty
      </Typography>

      <Typography
        variant="body2"
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        sx={{ color: "#999", mt: 1 }}
      >
        Looks like you haven’t added anything yet. Start shopping now!
      </Typography>
    </Box>
  );
};

export default EmptyCart;
