"use client";
import React from "react";
import { Box, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveComponents = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      display="flex"
      flexDirection={isXs || isSm ? "column" : "row"}
      justifyContent={isXs || isSm ? "center" : "flex-start"}
      alignItems="center"
      gap={2}
      paddingTop={2}
      paddingRight={isXs || isSm ? 2 : 12}
      paddingLeft={isXs || isSm ? 2 : 12}
    >
      {!isXs && !isSm && <Box width="15%" />}
      <Box
        width={isXs || isSm ? "100%" : "50%"}
        height={200}
        bgcolor="lightgray"
        marginBottom={isXs || isSm ? 2 : 0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <p>First Component (Centered)</p>
      </Box>
      <Box
        width={isXs || isSm ? "100%" : "35%"}
        height={200}
        bgcolor="lightgray"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={isXs || isSm ? 2 : 0}
      >
        <p>Second Component (Right)</p>
      </Box>
    </Box>
  );
};

export default ResponsiveComponents;
