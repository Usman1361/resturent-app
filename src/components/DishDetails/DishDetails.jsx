import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { dishImg } from "../smallComponents/images";
import { Link } from "react-router-dom";

const DishDetails = () => {
  return (
    <Box my={8}>
      <Container>
        <Grid
          container
          p={4}
          justifyContent="center"
          sx={{
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Grid item xs={12} sm={5} md={6}>
            <Box
              ml={{ xs: 0, sm: 0, md: 2 }}
              mt={{ xs: 4, sm: 10, md: 20 }}
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontsize: { xs: "1.5rem", sm: "3.6rem" },
                  marginbottom: "2rem",
                  textalign: { sm: "left", xs: "center" },
                  fontfamily: "Poppins",
                  fontweight: "600",
                  padding: "10px",
                }}
              >
                The flavor of <br /> Tradtion
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  mt: 1,
                  marginbottom: "2rem",
                  textalign: "left",
                  fontsize: { xs: "1.0rem", sm: "1.8rem" },
                  fontfamily: "Raleway",
                  fontweight: "400",
                  paddingLeft: "10px",
                }}
              >
                We are a multi-cuisine restaurant offering <br /> a wide variety
                of food experience in both <br />
                casual and fine dining environment.
              </Typography>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{
                  mt: 3,
                  marginLeft: "5px",
                  marginRight: "10px",
                }}
              >
                <Link
                  to="/menu"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Explore Menu
                </Link>
              </Button>
              <Button
                variant="text"
                color="success"
                size="small"
                sx={{ marginRight: "5px", mt: 3 }}
              >
                <Link
                  to="/booktable"
                  style={{ textDecoration: "none", color: "green" }}
                >
                  Book Table
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} md={5} pt={5}>
            <Box
              ml={{ xs: 0, sm: 6, md: 0 }}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                component="img"
                src={dishImg}
                alt=""
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DishDetails;
