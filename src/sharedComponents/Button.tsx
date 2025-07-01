'use client';
import Button from '@mui/material/Button';
import React from 'react';
import { SxProps, Theme } from "@mui/material/styles";
interface ProductButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  textcolor: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function ProductButton({
  children,
  color,
  textcolor,
  sx,
  ...props
}: ProductButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: color || "#DB4444",
        color: textcolor,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}