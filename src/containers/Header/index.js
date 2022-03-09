import { Box, Container } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { CgSearch } from "react-icons/cg";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux";

function Header() {
  const search = useSelector((state) => state.search);

  console.log("====================================");
  console.log(search);
  console.log("====================================");

  return (
    <Box
      elevation={6}
      className="shadow-md"
      sx={{ position: "sticky", width: "100%" }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box sx={{ width: "190px" }}>
            <img className="w-full h-full" src={logo} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #DDDDDD",
              p: 1.3,
              px: 2,
              borderRadius: "14px",
              width: { xs: "200px", sm: "269px" },
            }}
          >
            <input
              type="text"
              className="w-full outline-none text-sm"
              value={search}
              onChange={(e) =>
                dispatch({
                  type: "SET_SEARCH",
                  payload: { data: e.target.value },
                })
              }
            />
            <CgSearch className="text-2xl" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
