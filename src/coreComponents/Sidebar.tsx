'use client';
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, ListItemButton, Toolbar } from "@mui/material";

import { GiAmpleDress, GiLaptop, GiLifeSupport, GiMedicines } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";




export default function Sidebar() {
  const drawerWidth = 220;
  return (
    <Box sx={{ display: "flex" }}>          
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <GiAmpleDress />
            </ListItemIcon>
            <ListItemText>Woman’s Fashion</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PiPantsFill />
            </ListItemIcon>
            <ListItemText>Men’s Fashion</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GiLaptop />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GiLifeSupport />
            </ListItemIcon>
            <ListItemText>Home & Lifestyle</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GiMedicines />
            </ListItemIcon>
            <ListItemText>Medicine</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}
