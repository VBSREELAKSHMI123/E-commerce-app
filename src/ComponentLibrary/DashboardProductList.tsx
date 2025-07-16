"use client";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { ProductType } from "./redux/slices/ProductReducer";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "./redux/slices/WishlistReducer";
import { addToCart } from "./redux/slices/CartReducer";
import { useRouter } from "next/navigation";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IoCartOutline } from "react-icons/io5";
import ProductButton from "../sharedComponents/Button";
import React from 'react'

const DashboardProductList = () => {
  const router = useRouter();
  const productitems: ProductType[] = useSelector((state: RootState) => state.products.product) || [];
  console.log("productitems from Redux:", productitems);
  console.log("Is Array:", Array.isArray(productitems));
  const wishlist = useSelector((state: RootState) => state.wishlist.items) ?? [];
  const cartItems = useSelector((state: RootState) => state.cart.item)
  
 

  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ borderLeft: 1, bgcolor: "#DB4444", width: 8 }}>
        <Box
          component="span"
          sx={{ fontSize: "16px", color: "#DB4444", fontWeight: 600, ml: 2 }}
        >
          Today
        </Box>
      </Box>
      <Box sx={{ m: 1, overflowX: "auto", whiteSpace: "nowrap" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {productitems.map((product) => {
            const isWishList = wishlist.find((item) => item.id === product.id);
            const isCart = cartItems.some((item) => item.id === product.id);

            return (
              <Card
                key={product.id}
                sx={{
                  flex: "0 0 auto",
                  width: 200,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  ":hover": { transform: "scale(1.03)", boxShadow: 3 },
                  bgcolor: "#efefef",
                  cursor: "pointer",
                }}
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      isWishList
                        ? removeFromWishlist(product.id)
                        : addToWishlist(product)
                    );
                  }}
                  sx={{
                    position: "absolute",
                    top: 4,
                    right: 1,
                    color: "red",
                    zIndex: 1,
                  }}
                >
                  {isWishList ? <Favorite /> : <FavoriteBorder />}
                </IconButton>

                <Box
                  sx={{
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image || product.thumbnail}
                    alt={product.title}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      mixBlendMode: "darken",
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" noWrap>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    ₹ {product.price}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Rating value={product.rating} readOnly />
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <ProductButton
                    
                    color={isCart ? "white" : "black"}
                    textcolor={isCart ? "black" : "white"}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isCart) {
                        dispatch(addToCart(product));
                      }
                    }}
                    sx={{
                      border: isCart ? "1px solid black" : "none",
                      bgcolor: isCart ? "white" : "black",
                      color: isCart ? "black" : "white",
                      cursor: isCart ? "not-allowed" : "pointer",
                    }}
                  >
                    <IoCartOutline size={20} style={{ marginRight: 8 }} />
                    {isCart ? "Added to Cart" : "Add to Cart"}
                  </ProductButton>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ProductButton
          color="#DB4444"
          textcolor="white"
          onClick={() => router.push("/productlist")}
          data-testid="product-button"
        >
          view products
        </ProductButton>
      </Box>
    </>
  );
};

export default DashboardProductList;
