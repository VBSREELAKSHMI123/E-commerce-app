'use client';
import { Radio } from "@mui/material";
import {
  Box,
  Divider,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import ProductButton from "../sharedComponents/Button";

export default function ProductCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: 4,
      }}
    >
      <Box
        component="img"
        src="/images/Card1.png"
        alt="pimage"
        sx={{
          display: "flex",
          width: 400,
          height: 400,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Box>
        <Typography variant="h6">ASUS FHD Gaming Laptop</Typography>
        <Typography
          variant="body2"
          component="img"
          src="/images/Frame 922.png"
        />
        <Typography variant="body1">$192.00</Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {
            "PlayStation 5 Controller Skin High quality \n vinyl with air channel adhesive for easy \n bubble free install & mess free removal \n Pressure sensitive."
          }
        </Typography>
        <Divider sx={{ mt: 4, borderRadius: 3 }} />
        <Box sx={{ display: "flex", alignItems: "center", mt: 3, gap: 3 }}>
          <Typography variant="body1">Colours:</Typography>
          <RadioGroup row>
            <FormControlLabel
              value="red"
              control={<Radio />}
              label={undefined}
            />
            <FormControlLabel
              value="blue"
              control={<Radio />}
              label={undefined}
            />
          </RadioGroup>
        </Box>
        <ProductButton color="#DB4444" textcolor="white">
          Buy Now
        </ProductButton>
      </Box>
    </Box>
  );
}
