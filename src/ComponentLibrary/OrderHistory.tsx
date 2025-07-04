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

import dayjs from "dayjs";
import { RootState } from './redux/store';

export default function OrderHistory() {
  const orders = useSelector((state:RootState) => state.order.orders);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={4} sx={{display:"flex",justifyContent:"center"}}>
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
              <Typography variant="subtitle2">
                <strong>Order ID:</strong> {order.id}
              </Typography>
              <Typography variant="subtitle2">
                <strong>Placed On:</strong> {orderDate.format("DD/MM/YYYY")}
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
                        src={
                          item.image ||
                          item.thumbnail ||
                          "/images/placeholder.png"
                        }
                        alt={item.title}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">
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
              <Typography variant="subtitle1">
                <strong>Total:</strong> ₹ {totalAmount}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Delivery:</strong> {deliveryDate.format("DD/MM/YYYY")}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
}
