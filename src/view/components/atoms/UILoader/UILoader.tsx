import {Box, CircularProgress} from "@mui/material";
import React from "react";

export const UILoader: React.ReactNode = (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
)