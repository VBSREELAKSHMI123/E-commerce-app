import { Box } from "@mui/material";
import Sidebar from "@/coreComponents/Sidebar";
import Navbar from "@/coreComponents/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2,
            marginTop: "40px", 
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
