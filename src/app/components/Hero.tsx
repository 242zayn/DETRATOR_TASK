"use client";
import React from "react";
import { Box, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveComponents = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection={isSmallScreen ? "column" : "row"}
      justifyContent={isSmallScreen ? "center" : "flex-start"}
      alignItems="center"
      gap={2}
      paddingTop={2}
      paddingRight={12}
    >
      {!isSmallScreen && <Box width="20%" />}
      <Box
        width={isSmallScreen ? "100%" : "45%"}
        height={200}
        bgcolor="lightgray"
        marginBottom={isSmallScreen ? 2 : 0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <p>First Component (Centered)</p>
      </Box>
      <Box
        width={isSmallScreen ? "100%" : "35%"}
        height={200}
        bgcolor="lightgray"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={isSmallScreen ? 2 : 0}
      >
        <p>Second Component (Right)</p>
      </Box>
    </Box>
    // </Container>
  );
};

export default ResponsiveComponents;
