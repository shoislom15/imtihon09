import { Box, Container } from "@mui/material";
import React from "react";
import Algorismic from "../../assets/Algorismic.png";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#C4C4C4", py: 5 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "190px" }}>
            <img src={logo} className="w-full h-full object-cover" alt="" />
          </Box>
          <Box sx={{ width: "190px" }}>
            <img
              src={Algorismic}
              className="w-full h-full object-cover"
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
