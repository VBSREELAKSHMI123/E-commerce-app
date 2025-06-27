import Button from '@mui/material/Button';
import React from 'react';
interface ProductButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  textcolor: string;
  children: React.ReactNode;
}

export default function ProductButton({
  children,
  color,
  textcolor,

...props}: ProductButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: color || "#DB4444",
        mt: 3,
        color: textcolor,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}