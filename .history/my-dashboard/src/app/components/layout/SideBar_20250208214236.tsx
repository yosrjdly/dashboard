"use client"
import { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import DataUsageIcon from "@mui/icons-material/DataUsage";  // Data Icon
import SupportAgentIcon from "@mui/icons-material/SupportAgent"; // Support Icon
import Link from "next/link";

const drawerWidth = 250;

const menuItems = [
  { text: "Tableau de bord", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Colis", icon: <LocalShippingIcon />, path: "/colis" },
  { text: "Commandes", icon: <ShoppingCartIcon />, path: "/commandes" },
  { text: "Site Web", icon: <LanguageIcon />, path: "/site-web" },
  { text: "Stock", icon: <StoreIcon />, path: "/stock" },
  { text: "Paiement", icon: <PaymentIcon />, path: "/paiement" },
  { text: "Gestion", icon: <BarChartIcon />, path: "/gestion" },
  { text: "Data", icon: <DataUsageIcon />, path: "/data" }, // Separate Data Tab
  { text: "Support", icon: <SupportAgentIcon />, path: "/support" }, // Separate Support Tab
];

const Sidebar = () => {
  const [selected, setSelected] = useState(menuItems[0].path); // Default selected tab

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { 
          width: drawerWidth, 
          boxSizing: "border-box",
          backgroundColor: "#2B3033",
          color: "#ffffff",
        },
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>LOGO</Typography>
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={() => setSelected(item.path)}
              sx={{
                backgroundColor: selected === item.path ? "#3F4A52" : "transparent",
                color: selected === item.path ? "#FFD700" : "#ffffff",
                borderRadius: "8px",
                margin: "5px",
                "&:hover": { backgroundColor: "#505A63" }
              }}
            >
              <ListItemIcon sx={{ color: selected === item.path ? "#FFD700" : "#ffffff" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Settings Button (Separated at Bottom) */}
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/settings"
              sx={{
                backgroundColor: selected === "/settings" ? "#3F4A52" : "transparent",
                color: selected === "/settings" ? "#FFD700" : "#ffffff",
                borderRadius: "8px",
                margin: "5px",
                "&:hover": { backgroundColor: "#505A63" }
              }}
              onClick={() => setSelected("/settings")}
            >
              <ListItemIcon sx={{ color: selected === "/settings" ? "#FFD700" : "#ffffff" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
