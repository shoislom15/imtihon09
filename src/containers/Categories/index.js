import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import book from "../../assets/book.png";
import { categoryGetter } from "../../axios";

function Categories() {
  useEffect(() => categoryGetter(), []);

  const [searched, setSearched] = useState();

  const categories = useSelector((state) => state.categories);
  const books = useSelector((state) => state.books);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#EEEEE",
        p: 12,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ fontFamily: "Rozha One, serif", mb: 7 }}
            variant="h3"
          ></Typography>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Grid container spacing={2}>
              {categories.length ? (
                categories.map((cat, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        borderRadius: "14px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        p: 5,
                        height: "100%",
                      }}
                      onClick={() => {
                        navigate(`books/${cat.list_name_encoded}`);
                      }}
                    >
                      <Box sx={{ width: "58px", mb: 2.3 }}>
                        <img className="w-full h-full" src={book} />
                      </Box>
                      <Typography
                        sx={{ fontSize: "20px", textAlign: "center" }}
                      >
                        {cat.display_name}
                      </Typography>
                    </Box>
                  </Grid>
                ))
              ) : (
                <CircularProgress sx={{ mx: "auto", transform: "scale(5)" }} />
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Categories;
