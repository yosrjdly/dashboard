"use client "

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const themeColors = ["#FFD700", "#FF5733", "#3498db", "#2ecc71", "#9b59b6"];

const SettingsModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [selectedColor, setSelectedColor] = useState("#FFD700");

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {/* Header */}
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        Settings
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent dividers>
        <Typography variant="h6">Choose Theme Color:</Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          {themeColors.map((color) => (
            <Button
              key={color}
              sx={{
                width: 40,
                height: 40,
                minWidth: 0,
                borderRadius: "50%",
                backgroundColor: color,
                border: selectedColor === color ? "3px solid black" : "none",
              }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
    