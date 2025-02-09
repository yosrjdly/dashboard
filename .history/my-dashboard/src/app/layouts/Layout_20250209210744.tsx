"use client"
import { Box } from "@mui/material";
import Sidebar from "../components/layout/SideBar";
import SettingsButton from "../components/layout/SettingsButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", height: "50vh" }}>
      {/* Sidebar on the left */}
      <Box sx={{ width: 250, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#F4F6F8", overflow: "auto" }}>
        {children}
      </Box>

      {/* Settings button at the bottom-left */}
      <SettingsButton />
    </Box>
  );
};

export default DashboardLayout;
