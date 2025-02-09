"use client"
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useThemeContext } from "../../";

const menuItems = [
  { text: "Tableau de bord", icon: <DashboardIcon /> },
  { text: "Colis", icon: <LocalShippingIcon /> },
];

const Sidebar = () => {
  const { themeColor } = useThemeContext();

  return (
    <Box sx={{ width: 250, height: "100vh", backgroundColor: "#2B3033", color: themeColor }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: themeColor }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
