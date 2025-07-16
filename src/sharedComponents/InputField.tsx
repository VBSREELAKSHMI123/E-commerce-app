"use client";
import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export default function InputField({
  inputProps,
  "data-testid": dataTestId,
  ...props
}: TextFieldProps & { "data-testid"?: string }) {
  return (
    <TextField {...props} inputProps={inputProps} data-testid={dataTestId} />
  );
}

// 'use client';
// import { TextField, TextFieldProps, } from "@mui/material";
// import React from "react";

// export default function InputField(props:TextFieldProps) {
//     return (
//         <TextField {...props} />
//     )
// }
