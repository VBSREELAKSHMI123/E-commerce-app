"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {Box,Typography,Card,CardMedia,CardContent,Rating,IconButton} from "@mui/material";
import { ProductType } from "../redux/slices/CartReducer";
import { removeFromCart } from "../redux/slices/CartReducer";
import { MdDelete } from "react-icons/md";
import ProductButton from "../../sharedComponents/Button";
import { useRouter } from "next/navigation";
import EmptyCart from "../../sharedComponents/EmptyCart";

const CartView = () => {
  const router = useRouter();
  const cartItems: ProductType[] = useSelector(
    (state: RootState) => state.cart.item
  );
  const dispatch = useDispatch();
  console.log("card items:", cartItems);
  return (
    <Box>
      <Box sx={{ position: "relative", mt: 5 }}>
        <Box sx={{ position: "absolute", top: 0, right: 15 }}>
          <ProductButton
            textcolor="white"
            color="#DB4444"
            onClick={() => router.push("/checkout")}
          >
            Checkout
          </ProductButton>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
          }}
        >
          Your Cart ({cartItems.length}{" "}
          {cartItems.length === 1 ? "Item" : "Items"})
        </Typography>
      </Box>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
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
          {cartItems.map((items) => (
            <Card
              key={items.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                height: "100%",
                ":hover": { transform: "scale(1.03)", boxShadow: 3 },
              }}
            >
              <IconButton
                onClick={() => dispatch(removeFromCart(items.id))}
                aria-label="delete item"
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "red",
                  zIndex: 1,
                }}
              >
                <MdDelete />
              </IconButton>
              <CardMedia
                component="img"
                image={items.thumbnail}
                height={200}
                alt={items.title}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" noWrap>
                  {items.title}
                </Typography>
                <Typography  variant="body1" sx={{ mt: 1 }}>
                  ₹ {items.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating value={items.rating} readOnly />
                  {/* <Typography variant="body2" sx={{ ml: 1 }}>
                    (
                    {typeof items.rating === "object" && items.rating.count
                      ? `(${items.rating.count})`
                      : ""}
                    )
                  </Typography> */}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CartView;
