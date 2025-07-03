import { Box } from "@mui/material";
import Navbar from "../../ComponentLibrary/Navbar";

export default function SignUpLayout({
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
