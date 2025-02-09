"use context"
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import { useThemeContext } from "../../";

const menuItems = [
  { text: "Tableau de bord", icon: <DashboardIcon /> },
  { text: "Colis", icon: <LocalShippingIcon /> },
  { text: "Commandes", icon: <ShoppingCartIcon /> },
  { text: "Site Web", icon: <StoreIcon /> },
  { text: "Stock", icon: <StoreIcon /> },
  { text: "Paiement", icon: <PaymentIcon /> },
  { text: "Gestion", icon: <SettingsIcon /> },
  { text: "Data", icon: <DashboardIcon /> },
  { text: "Support", icon: <SupportIcon /> },
];

const Sidebar = () => {
  const { themeColor } = useThemeContext();

  return (
    <Box sx={{ width: 250, height: "100vh", backgroundColor: "#2B3033", color: "#FFF" }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              bgcolor: "transparent",
              color: "#FFF",
              "&:hover": { bgcolor: themeColor },
            }}
          >
            <ListItemIcon sx={{ color: themeColor }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
