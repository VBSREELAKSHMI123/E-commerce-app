"use client";
import {
  Box,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { AppBar, Toolbar, Menu } from "@mui/material";
import { Link } from "@mui/material";
import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonCircle,
  IoSearchOutline,
} from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "./redux/slices/LoginReducer";

interface ProductSuggestion {
  id: number;
  title: string;
}

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState<ProductSuggestion[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim().length > 1) {
        axios
          .get(`https://dummyjson.com/products/search?q=${search}`)
          .then((res) => setSuggestion(res.data.products.slice(0, 8)))
          .catch(() => setSuggestion([]));
      } else {
        setSuggestion([]);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [search]);

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setSuggestion([]);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: 40 }}>
      <Box>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            zIndex: 1201,
            bgcolor: "white",
            variant: "outlined",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Toolbar sx={{ gap: 5, minHeight: 40, height: 40 }}>
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
            <Box
              sx={{
                display: "flex",
                right: 5,
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <InputBase
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 14,
                  width: "100%",
                  height: 40,
                  bgcolor: "#efefef",
                  p: 1,
                  borderRadius: 1,
                }}
                endAdornment={
                  <IoSearchOutline
                    size={20}
                    color="black"
                    onClick={handleSearch}
                    cursor="pointer"
                  />
                }
              />
              {suggestion.length > 0 && (
                <Paper
                  sx={{
                    position: "absolute",
                    top: 40,
                    width: 250,
                    zIndex: 9999,
                    maxHeight: 200,
                    overflowY: "auto",
                  }}
                >
                  <List>
                    {suggestion.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          sx={{ px: 1, py: 0.5 }}
                          onClick={() => {
                            router.push(
                              `/search?q=${encodeURIComponent(item.title)}`
                            );
                            setSearch("");
                            setSuggestion([]);
                          }}
                        >
                          <ListItemText
                            primary={
                              item.title.length > 10
                                ? item.title.slice(0, 10) + "..."
                                : item.title
                            }
                            primaryTypographyProps={{ fontSize: 13 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
              <Box>
                <IoHeartOutline
                  color="black"
                  size={20}
                  cursor="pointer"
                  onClick={() => router.push("/wishlist")}
                />
              </Box>
              <Box>
                <IoCartOutline
                  color="black"
                  size={20}
                  cursor="pointer"
                  onClick={() => router.push("/cartlist")}
                />
              </Box>
              <Box>
                <IconButton onClick={handleMenuOpen}>
                  <IoPersonCircle color="black" size={22} cursor="pointer" />
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    router.push("/account");
                  }}
                >
                  Account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    dispatch(logout());
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
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
