"use client"
import { Box, IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import SettingsModal from "./SettingsModal";

const SettingsButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Settings Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          rig: 20,
          zIndex: 1000,
        }}
      >
        <Tooltip title="Settings">
          <IconButton
            onClick={() => setOpen(true)}
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

      {/* Settings Modal */}
      <SettingsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SettingsButton;
