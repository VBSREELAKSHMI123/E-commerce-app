"use client";
import ProductButton from "@/sharedComponents/Button";
import { FavoriteBorder } from "@mui/icons-material";
import { Box, Divider, FormControlLabel, Radio, RadioGroup, Rating, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../ComponentLibrary/redux/slices/CartReducer'

interface ProductType {
  id: number;
  title: string;
  price: number;
  image?: string;
  thumbnail?: string;
  description: string;
  rating: number | { rate: number; count?: number };
}

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductType | null>();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch()

  const fetchProduct = async (id: string) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    if (response.data) {
      setProduct(response.data);
    } else {
      console.log("No response");
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id as string);
    }
  }, [id]);
  return (
    <Box overflow={"clip"} sx={{ display: "flex", gap: 4, height: "100vh" }}>
      <Box p={6} sx={{ display: "flex", gap: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {Array(4)
            .fill(0)
            .map((v, k) => (
              <Box
                key={k}
                sx={{
                  backgroundColor: "#efefef",
                  flex: 1,
                  aspectRatio: 1,
                  width: "max-content",
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <Image
                  src={
                    product?.image ||
                    product?.thumbnail ||
                    "/images/Frame685.png"
                  }
                  alt="image"
                  height={60}
                  width={60}
                  style={{ mixBlendMode: "darken" }}
                />
              </Box>
            ))}
        </Box>
        <Box
          height="100%"
          sx={{
            backgroundColor: "#efefef",
            aspectRatio: 1,
            position: "relative",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box height={"80%"} sx={{ aspectRatio: 1 }} position={"relative"}>
            <Image
              src={
                product?.image || product?.thumbnail || "/images/Frame685.png"
              }
              alt="image"
              fill
              style={{ mixBlendMode: "darken" }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{ fontWeight: "bold", fontSize: 20, fontFamily: "sans-serif" }}
          >
            {product?.title}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Rating
              value={
                typeof product?.rating === "number"
                  ? product?.rating
                  : product?.rating.rate
              }
              readOnly
            />
            <Typography variant="body2" sx={{ ml: 1 }}>
              (
              {typeof product?.rating === "object" && product?.rating.count
                ? `(${product?.rating.count})`
                : ""}
              )
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ mt: 1 }}>
              ₹ {product?.price}
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {product?.description}
              </Typography>
            </Box>
            <Divider sx={{ mt: 2, borderColor: "black" }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Colours : </Typography>
              <RadioGroup row>
                <FormControlLabel value="black" control={<Radio />} label />
                <FormControlLabel value="red" control={<Radio />} label />
              </RadioGroup>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography>Size : </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: 1,
                  p: 1,
                }}
              >
                XS
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: 1,
                  p: 1,
                }}
              >
                S
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: 1,
                  p: 1,
                  bgcolor: "black",
                  color: "white",
                }}
              >
                M
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: 1,
                  p: 1,
                }}
              >
                L
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: 1,
                  p: 1,
                }}
              >
                XL
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ border: 1, p: 1 }}>-</Box>
                <Box sx={{ border: 1, p: 1 }}>2</Box>
                <Box
                  sx={{ border: 1, bgcolor: "black", color: "white", p: 1 }}
                >
                  +
                </Box>
              </Box>

              <Box>
                <ProductButton
                  color="black"
                  textcolor="white"
                  onClick={() => {
                    if (product) {
                      dispatch(addToCart(product));
                    }
                  }}
                >
                  Add to Cart
                </ProductButton>
              </Box>

              <Box sx={{ border: 1, p: 1 }}>
                <FavoriteBorder />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: 1,
              p: 1,
              width: 300,
              mt: 1,
            }}
          >
            <Typography variant="body1">Free Delivery</Typography>
            <Typography variant="body2">
              Enter your postal code for Delivery Availability
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: 1,
              p: 1,
              width: 300,
            }}
          >
            <Typography variant="body1">Return Delivery</Typography>
            <Typography variant="body2">
              Free 30 Days Delivery Returns. Details
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
