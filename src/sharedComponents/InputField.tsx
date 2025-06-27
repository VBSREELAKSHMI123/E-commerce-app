'use client';
import { TextField, TextFieldProps, } from "@mui/material";
import React from "react";

export default function InputField(props:TextFieldProps) {
    return (
        <TextField {...props} />
    )
}