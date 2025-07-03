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
import { addProducts} from "./redux/slices/ProductReducer";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

const SearchPage = ({ query }: { query: string }) => {
  const [results, setResults] = useState<Product[]>([]);
  const dispatch = useDispatch();
    const wishlist = useSelector((state: RootState) => state.wishlist.items) ?? []
    const router = useRouter()

  useEffect(() => {
    if (query) {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => {
          setResults(res.data.products || []);
          dispatch(addProducts(res.data.products));
          console.log("products stored in redux", res.data.products);
        })
        .catch((err) => console.error("Search error:", err));
    }
  }, [query]);

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
      {results.map((product) => {
        const isWishList = wishlist.find((item) => item.id === product.id);

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
              <Typography variant="subtitle1" noWrap>
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                ₹ {product.price}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Rating  value={typeof product.rating === "number" ? product.rating : product.rating.rate} readOnly />
                {/* <Typography variant="body2" sx={{ ml: 1 }}>
                  ({product.})
                </Typography> */}
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                variant="contained"
                sx={{ color: "white", bgcolor: "black" }}
                fullWidth
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCart(product));
                }}
              >
                <IoCartOutline size={20} style={{ marginRight: 8 }} />
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default SearchPage;
