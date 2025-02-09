import Sidebar from "../components/layout/SideBar.tsx";
import SettingsButton from "../components/layout/SettingsButton";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>

      {/* Settings Button (Fixed Bottom Left) */}
      <SettingsButton />
    </Box>
  );
};

export default Layout;
