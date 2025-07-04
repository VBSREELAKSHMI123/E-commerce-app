import { Box } from "@mui/material";
import Navbar from "../../ComponentLibrary/Navbar";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  );
}
