import { Box } from "@mui/material";
import Sidebar from "../components/";
import { useThemeContext } from "@/context/ThemeContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { themeColor } = useThemeContext();

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#1E1E1E" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3, color: themeColor }}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
