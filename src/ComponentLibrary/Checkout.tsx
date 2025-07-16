"use client";
import InputField from "@/sharedComponents/InputField";
import React from "react";
import {
  Box,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useSelector } from "react-redux";
import { ProductType } from "./redux/slices/CartReducer";
import { RootState } from "./redux/store";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";

import PayWithStripe from "./PayWithStripe";

const checkoutSchema = Yup.object({
  name: Yup.string().required("Name must be Filled"),
  address: Yup.string().required("Address must be Filled"),
  city: Yup.string().required("City must be Filled"),
  phone: Yup.string()
    .required("Phone number must be filled")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: Yup.string().required("Email must be filled").email(),
});

const Checkout = () => {
  const [mark, setMark] = useState(false);
  const cartitems: ProductType[] = useSelector(
    (state: RootState) => state.cart.item
  );
  const totalAmount = cartitems.reduce((acc, item) => acc + item.price, 0);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      phone: "",
      email: "",
    },

    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      console.log("Form submitted with: ", values);
    },
  });

  useEffect(() => {
    sessionStorage.setItem("customerInfo", JSON.stringify(formik.values));
    sessionStorage.setItem("cartItems", JSON.stringify(cartitems));
  }, [formik.values, cartitems]);

  return (
    <Box sx={{ marginTop: "40px", mb: 5, ml: 5 }}>
      <Box
        sx={{
          display: "flex",
          gap: 10,
        }}
      >
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column" }}
          onSubmit={formik.handleSubmit}
        >
          <InputField
            variant="filled"
            label="Name"
            fullWidth
            size="small"
            sx={{ width: 350, mb: 2 }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            data-testid="checkout-name"
          />
          {formik.touched.name && formik.errors.name && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.name}
            </Typography>
          )}
          <InputField
            variant="filled"
            label="Address"
            fullWidth
            size="small"
            sx={{ width: 350, mb: 2 }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            name="address"
            data-testid="checkout-address"
          />
          {formik.touched.address && formik.errors.address && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.address}
            </Typography>
          )}
          <InputField
            variant="filled"
            label="Town/City"
            fullWidth
            size="small"
            sx={{ width: 350, mb: 2 }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            name="city"
            data-testid="checkout-city"
          />
          {formik.touched.city && formik.errors.city && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.city}
            </Typography>
          )}
          <InputField
            variant="filled"
            label="Phone Number"
            fullWidth
            size="small"
            sx={{ width: 350, mb: 2 }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            name="phone"
            data-testid="checkout-phone"
          />
          {formik.touched.phone && formik.errors.phone && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.phone}
            </Typography>
          )}
          <InputField
            variant="filled"
            label="Email Address"
            fullWidth
            size="small"
            sx={{ width: 350, mb: 2 }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            data-testid="checkout-email"
          />
          {formik.touched.email && formik.errors.email && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.email}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton onClick={() => setMark((prev) => !prev)}>
                {mark ? (
                  <CheckBoxIcon sx={{ color: "red" }} />
                ) : (
                  <CheckBoxOutlineBlankIcon sx={{ color: "red" }} />
                )}
              </IconButton>
            </Box>
            <Box>
              <Typography>
                Save this information for faster check-out <br></br>
                next time
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {cartitems.map((list) => (
            <Box
              key={list.id}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                border: 2,
                mb: 1,
                p: 1,
              }}
            >
              <Image
                height={60}
                width={60}
                src={list.image || list.thumbnail || "/images/Frame 922.png"}
                alt="list.image"
                style={{ marginRight: 2 }}
              />
              <Box sx={{ mr: 1, ml: 1 }}>{list.title}</Box>
              <Box sx={{ ml: 1, fontWeight: "bold", fontSize: 20 }}>
                {list.price}
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              borderBottom: 1,
              justifyContent: "space-between",
              mb: 2,
              mt: 2,
              p: 1,
            }}
          >
            <Box>Subtotal:</Box>
            <Box>₹ {totalAmount.toFixed(2)}</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderBottom: 1,
              justifyContent: "space-between",
              mb: 2,
              p: 1,
            }}
          >
            <Box>Shipping: </Box>
            <Box>Free</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              p: 1,
            }}
          >
            <Box>Total: </Box>
            <Box>₹ {totalAmount.toFixed(2)}</Box>
          </Box>
          <Box>
            <RadioGroup>
              <FormControlLabel value="bank" control={<Radio />} label="Bank" />
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Cash on delivery"
              />
            </RadioGroup>
          </Box>

          <PayWithStripe
            amount={totalAmount * 100}
            name="Cart Total"
            data-testid="checkout-stripe"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
