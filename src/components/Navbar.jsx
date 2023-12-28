import React from "react";
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/contstants";
import SearchBar from "./SearchBar";

function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={{ xs: "0px", sm: 2 }}
      py={{ xs: 2 }}
      sx={{
        position: "sticky",
        background: "black",
        top: 0,
        justifyContent: "space-between",
        zIndex: "999999",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "9px",
          textDecoration: "none",
          gap: "10px",
        }}
      >
        <img src={logo} alt="photo" height={45} />

        <Typography
          ml={-1}
          variant={isSmallScreen ? "subtitle1" : "h4"}
          fontFamily="Rubik Bubbles"
          color="#fff"
        >
          YouClone
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
