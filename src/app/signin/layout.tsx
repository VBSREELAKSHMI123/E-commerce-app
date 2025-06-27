import { Box } from "@mui/material";
import Navbar from "../../coreComponents/Navbar";

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
