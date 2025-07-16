"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "./redux/slices/CartReducer";
import {
  addToWishlist,
  removeFromWishlist,
} from "./redux/slices/WishlistReducer";
import { IoCartOutline } from "react-icons/io5";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ProductType from "./redux/slices/WishlistReducer";
import { addProducts } from "./redux/slices/ProductReducer";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActions,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRouter } from "next/navigation";
import ProductButton from "@/sharedComponents/Button";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  thumbnail: string;
  rating: number;
}

export default function ProductView() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const dispatch = useDispatch();
  const wishlist =
    useSelector((state: RootState) => state.wishlist.items) ?? [];
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.item);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        dispatch(addProducts(response.data.products));
        console.log("products stored in redux", response.data.products);

        console.log("productitems from Redux:", response.data.products);
        console.log("Is Array:", Array.isArray(response.data.products));
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        gap: 3,
        padding: 4,
      }}
    >
      {products.map((product) => {
        const isWishList = wishlist.find((item) => item.id === product.id);
        const isCart = cartItems.some((item) => item.id === product.id);


        return (
          <Card
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              ":hover": { transform: "scale(1.03)", boxShadow: 3 },
              cursor: "pointer",
            }}
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
                top: 8,
                right: 8,
                color: "red",
                zIndex: 1,
              }}
            >
              {isWishList ? <Favorite /> : <FavoriteBorder />}
            </IconButton>

            <CardMedia
              component="img"
              image={product.thumbnail}
              height={200}
              alt={product.title}
              sx={{ objectFit: "contain", p: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="subtitle1"
                noWrap
                data-testid="product-title"
              >
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                ₹ {product.price}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Rating value={product.rating} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({product.rating})
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <ProductButton
                data-testid="cart-button"
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
  );
}
