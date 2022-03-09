import { Box, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/bg.png";

function MainSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "89vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Rozha One, serif",
            maxWidth: "1000px",
            fontSize: "70px",
            color: "white",
            textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7)",
          }}
          variant="h3"
        >
          BookShop - easy buy books online
        </Typography>
      </Box>
    </Box>
  );
}

export default MainSection;
