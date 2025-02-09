import { Box, IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";

const SettingsButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20, // Ensures it's at the bottom left
        zIndex: 1000, // Makes sure it stays on top
      }}
    >
      <Tooltip title="Settings">
        <IconButton
          component={Link}
          href="/settings"
          sx={{
            backgroundColor: "#3F4A52",
            color: "#FFD700",
            "&:hover": { backgroundColor: "#505A63" },
          }}
        >
          <SettingsIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SettingsButton;
