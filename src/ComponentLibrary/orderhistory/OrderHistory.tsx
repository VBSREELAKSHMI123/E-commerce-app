"use client";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import dayjs from "dayjs";
import { RootState } from "../redux/store";

export default function OrderHistory() {
  const orders = useSelector((state: RootState) => state.order.orders);

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        mb={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Order History
      </Typography>

      {orders.map((order) => {
        const orderDate = dayjs(order.placedAt);
        const deliveryDate = orderDate.add(5, "day");

        const totalAmount = order.items.reduce(
          (acc, item) => acc + item.price,
          0
        );

        return (
          <Card key={order.id} sx={{ mb: 4, p: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="subtitle2" data-testid="order-id">
                <strong>Order ID:</strong> {order.id}
              </Typography>
              <Typography variant="subtitle2" data-testid="order-date">
                <strong>Placed On:</strong> {orderDate.format("MM/DD/YYYY")}
              </Typography>
            </Box>

            <CardContent sx={{ p: 0 }}>
              {order.items.map((item, index) => (
                <Box key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        src={item.thumbnail}
                        alt={item.title}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {item.title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          data-testid="item-price"
                        >
                          ₹ {item.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                </Box>
              ))}
            </CardContent>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Typography variant="subtitle1" data-testid="order-total">
                <strong>Total:</strong> ₹ {totalAmount}
              </Typography>
              <Typography variant="subtitle1" data-testid="order-delivery">
                <strong>Delivery:</strong> {deliveryDate.format("MM/DD/YYYY")}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
