"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
  Divider,
} from "@mui/material";
import { ProductType } from "../coreComponents/redux/slices/CartReducer";
import { removeFromCart } from "../coreComponents/redux/slices/CartReducer";
import { MdDelete } from "react-icons/md";

const CartView = () => {
  const cartItems: ProductType[] = useSelector(
    (state: RootState) => state.cart.item
  );
  const dispatch = useDispatch();
  console.log("card items:", cartItems);
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          mt: 6,
          mb: 1,
        }}
      >
        🛒 Your Cart ({cartItems.length}{" "}
        {cartItems.length === 1 ? "Item" : "Items"})
      </Typography>

      <Divider sx={{ width: "50%", margin: "0 auto 30px" }} />

      {cartItems.length === 0 ? (
        <h1>Your Cart is Empty</h1>
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
                image={items.image}
                height={200}
                alt={items.title}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" noWrap>
                  {items.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  ₹ {items.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating value={items.rating.rate} precision={0.1} readOnly />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({items.rating.count})
                  </Typography>
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
