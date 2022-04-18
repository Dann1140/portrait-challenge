import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PlanetBanner() {
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "black",
        py: 2,
      }}
    >
      <Typography variant="subtitle1">
        Please press Enter to set your planet selection
      </Typography>
    </Box>
  );
}
