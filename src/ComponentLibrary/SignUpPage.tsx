"use client";
import React from 'react'
import { Box, Link, Typography } from "@mui/material";
import InputField from "../sharedComponents/InputField";
import ProductButton from "../sharedComponents/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { registerSuccess } from "./redux/slices/RegisterReducer";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";

const formSchema = Yup.object({
  name: Yup.string()
    .required("Name must be Filled")
    .min(3, "Minimum 3 Characters"),
  email: Yup.string().email("Invalid Mail ID").required("Email must be Filled"),
  password: Yup.string()
    .required("Password must be Filled")
    .min(3, "Minimum 3 Characters"),
});

export default function SignUpPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Form submitted with: ", values);
      dispatch(registerSuccess(values));
    },
  });

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Box
        component="img"
        src="/images/Signup_image.png"
        alt="signup"
        sx={{ maxHeight: 450, flex: 1, ml: 2, mt: 5, maxWidth: 500 }}
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
            Create an account
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Enter your details below
          </Typography>
          <InputField
            placeholder="Name"
            sx={{
              mb: formik.touched.name && formik.errors.name ? 1 : 4,
              input: { color: "gray" },
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            variant="standard"
          />
          {formik.touched.name && formik.errors.name && (
            <Typography variant="body2" sx={{ color: "#DB4444" }}>
              {formik.errors.name}
            </Typography>
          )}
          <InputField
            placeholder="Email"
            sx={{
              mb: formik.touched.email && formik.errors.email ? 1 : 4,
              input: { color: "gray" },
            }}
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
            placeholder="Password"
            sx={{
              mb: formik.touched.password && formik.errors.password ? 1 : 4,
              input: { color: "gray" },
            }}
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
          <ProductButton color="#DB4444" textcolor="white" type="submit">
            Create Account
          </ProductButton>
          <ProductButton color="white" textcolor="black" sx={{ mt: 2 }}>
            <FcGoogle size={18} style={{ marginRight: 7 }} />
            Sign Up With Google
          </ProductButton>
          <Box sx={{ justifyContent: "space-between", mt: 2 }}>
            <Box component="div" sx={{ display: "inline" }}>
              Already have account?
            </Box>
            <Box component="div" sx={{ display: "inline", ml: 2 }}>
              <Link href="/signin" sx={{ color: "#000000" }}>
                Log in
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
