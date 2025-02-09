"use client"
import { Box } from "@mui/material";
import Sidebar from "../components/layout/SideBar";
import { useThemeContext } from "../context/ThemeContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { themeColor } = useThemeContext();

  return (
    <Box sx={{ display: "flex", height: "", backgroundColor: "#1E1E1E" }}>
      {/* Sidebar (fixed on the left) */}
      <Box sx={{ width: 250, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      {/* Main content area (expands to fill space) */}
      <Box sx={{ flexGrow: 1, padding: 3, overflowY: "auto", color: themeColor }}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
