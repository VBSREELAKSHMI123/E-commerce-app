"use client";
import React from 'react'
import { Box, Typography } from "@mui/material";
import InputField from "../sharedComponents/InputField";
import ProductButton from "../sharedComponents/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/slices/LoginReducer";
import { RootState } from "./redux/store";

const formSchema = Yup.object({
  email: Yup.string().email("Invalid Mail ID").required("Email must be Filled"),
  password: Yup.string()
    .required("Password must be Filled")
    .min(3, "Minimum 3 Characters"),
});

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const redirectUrl = useSelector((state: RootState) => state.auth.redirectUrl);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      dispatch(login());
      router.push(redirectUrl || "/dashboard");
      console.log(values);
    },
  });
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Box
        component="img"
        src="/images/Signup_image.png"
        alt="signup"
        sx={{ maxHeight: 450, flex: 1, maxWidth: 500,mt:5,ml:2 }}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            width: "80%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Log in to Exclusive
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Enter your details below
          </Typography>

          <InputField
            defaultValue="Email or Phone Number"
            placeholder="Email"
            sx={{  mb: formik.touched.email && formik.errors.email ? 1 : 4, input: { color: "gray" } }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            variant="standard"
          />
          {formik.touched.email && formik.errors.email && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.email}
            </Typography>
          )}
          <InputField
            defaultValue="Password"
            placeholder="Password"
            sx={{ mb: formik.touched.email && formik.errors.email ? 1 : 4, input: { color: "gray" } }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            variant="standard"
          />
          {formik.touched.password && formik.errors.password && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.password}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ProductButton color="#DB4444" textcolor="white" type="submit">
              Log In
            </ProductButton>
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              Forgot Password?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
