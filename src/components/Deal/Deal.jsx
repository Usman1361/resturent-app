import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Rating } from "@mui/material";
import { dish3, dish4, dish5, dealbac } from "../smallComponents/images";
import { Link } from "react-router-dom";

export default function Deal() {
  return (
    <Box mt={14}>
      <Container maxWidth="xl">
        <Box
          sx={{
            background: `#d6e5d8 url('${dealbac}') no-repeat bottom right / 100px`,
          }}
        >
          <Grid container spacing={2} px={3}>
            {[dish5, dish4, dish3].map((img, i) => (
              <Grid item xs={6} md={2} key={img}>
                <Box
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    display: { xs: i === 2 ? "none" : "block", md: "block" },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
            ))}
            <Grid xs={12} sm={12} md={6}>
              <Box mt={8} ml={5}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#26643b" }}
                >
                  20% OFF
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#3b413a" }}
                >
                  Demo Dish For Discount
                </Typography>
                <Typography
                  pr={2}
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "line-through",
                    display: "inline-block",
                    color: "#3f3c3c",
                  }}
                >
                  $45
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#26643b",
                  }}
                >
                  $35
                </Typography>
                <br></br>
                <Rating value={4} readOnly sx={{ color: "#26643b" }} />
                <br></br>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ backgroundColor: "#26643b" }}
                >
                  <Link
                    to="/booktable"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Book Table
                  </Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
