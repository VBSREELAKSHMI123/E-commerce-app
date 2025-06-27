'use client';
import { Box,Typography } from "@mui/material"
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "@mui/material";

import React from "react";

export default function Navbar() {
 
    return (
      <Box sx={{ display: "flex", flexDirection: "row", height: 40 }}>
        <Box>
          <AppBar
            elevation={0}
            position="fixed"
            sx={{ zIndex: 1201, bgcolor: "white", variant: "outlined" }}
          >
            <Toolbar sx={{ gap: 5,minHeight:40,height:40 }}>
              <Typography variant="h6" noWrap sx={{ color: "black" }}>
                Exclusive
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Link href="/dashboard" underline="none">
                  <Typography component="span" sx={{ color: "black" }}>
                    Home
                  </Typography>
                </Link>
                <Link href="/contact" underline="none">
                  <Typography
                    component="span"
                    sx={{ color: "black", cursor: "pointer" }}
                  >
                    Contact
                  </Typography>
                </Link>
                <Link href="/about" underline="none">
                  <Typography component="span" sx={{ color: "black" }}>
                    About
                  </Typography>
                </Link>
                <Link href="/signup" underline="none">
                  <Typography
                    component="span"
                    sx={{ color: "black", cursor: "pointer" }}
                  >
                    SignUp
                  </Typography>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
         
        </Box>
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box> */}
      </Box>
    );
}
