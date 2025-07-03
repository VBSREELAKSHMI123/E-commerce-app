'use client';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, ListItemButton, Toolbar } from "@mui/material";
import { GiAmpleDress, GiLaptop, GiLifeSupport, GiMedicines } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { useRouter } from "next/navigation";



export default function Sidebar() {
  const drawerWidth = 200;
  const router = useRouter()

  const handleSearch = (query:string) => {
  if (query.trim()) {
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }
}

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
          <ListItemButton onClick={() => handleSearch("women")}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <GiAmpleDress />
            </ListItemIcon>
            <ListItemText>Woman’s Fashion</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleSearch("men")}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <PiPantsFill />
            </ListItemIcon>
            <ListItemText>Men’s Fashion</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleSearch("phone")}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <GiLaptop />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleSearch("kitchen")}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <GiLifeSupport />
            </ListItemIcon>
            <ListItemText>Home & Lifestyle</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleSearch("kitchen")}>
            <ListItemIcon sx={{ minWidth: 36 }}>
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
