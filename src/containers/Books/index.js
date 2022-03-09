import {
  Box,
  ButtonBase,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bookGetter } from "../../axios";

function Books() {
  const books = useSelector((state) => state.books);

  const params = useParams();

  console.log("====================================");
  console.log(params);
  console.log("====================================");

  const navigate = useNavigate();

  useEffect(() => {
    bookGetter(params.categoryBooks);
    console.log(books);
  }, []);

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
          >
            {books.list_name}
          </Typography>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Grid container spacing={2}>
              {books.books ? (
                books.books.map((cat, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "14px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        height: "100%",
                        overflow: "hidden",
                        position: "relative",
                      }}
                      onClick={() => {
                        // navigate(`books/${cat.list_name_encoded}`);
                      }}
                    >
                      <Box sx={{ height: "350px", width: "100%" }}>
                        <img
                          src={cat.book_image}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </Box>
                      <Box
                        sx={{
                          textAlign: "left",
                          p: 4,
                          pb: 12,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ fontSize: "18px", mb: 1 }}
                          >
                            Title: {cat.title}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ color: "#8F8F8F", fontSize: "16px", mb: 1 }}
                          >
                            Author: {cat.author}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ color: "#8F8F8F", fontSize: "16px", mb: 1 }}
                          >
                            Price:{" "}
                            <span className="text-[#FE8537]">
                              {cat.price} $
                            </span>
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "absolute",
                            bottom: "25px",
                            width: "100%",
                            px: 4,
                          }}
                        >
                          <button
                            onClick={() => window.open(cat.amazon_product_url)}
                            className="rounded-xl text-white text-center bg-[#14668C] w-[47%] py-3"
                          >
                            Buy
                          </button>
                          <button className="rounded-xl text-white text-center bg-[#14668C] w-[47%] py-3">
                            More
                          </button>
                        </Box>
                      </Box>
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

export default Books;
