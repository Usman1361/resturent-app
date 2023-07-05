import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import { icon1, icon2, icon3, icon4 } from "../smallComponents/images";

const QualitySection = () => {
  // let qualityAtt = [
  //   {
  //     title: "Quality Food",
  //     icon: icon1,
  //   },
  //   {
  //     title: "Classical taste",
  //     icon: icon2,
  //   },
  //   {
  //     title: "Skilled chef",
  //     icon: icon3,
  //   },
  //   {
  //     title: "Best service",
  //     icon: icon4,
  //   },
  // ];
  return (
    <Box>
      <Container>
        <Grid container mt={12} ml={{ xs: 0, md: 5 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              alignContent: { xs: "center", md: "left" },
            }}
          >
            <Box mt={4} sx={{ marginLeft: { xs: "0px", md: "80px" } }}>
              <Typography
                variant="h4"
                component="div"
                mb={2}
                sx={{ color: "#3b413a", fontFamily: "Poppins" }}
              >
                Why Choose Our Food
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ fontWeight: "400", fontFamily: "Raleway" }}
              >
                Quality of Service, Food, Ambiance, and Value of Money are the
                primary elements for choosing a restaurant. Shaif's Cuisine is
                one of the most exquisite fine-dinning restaurant in Chittagong
                cities with a captivating view of GEC Hills, perfect ambiance,
                and scrumptious food.
              </Typography>
            </Box>
          </Grid>

          {/* {qualityAtt.map(({ title, icon }) => (
            <Grid item xs={12} md={3}>
                <Box>
                  <MiniCard Image={icon} Title={title} />
                </Box>
            </Grid>
          ))} */}
          <Grid
            item
            xs={11}
            md={5}
            sx={{
              marginTop: { xs: "30px", sm: "10px", md: "0px" },
            }}
          >

            <Stack
              direction="row"
              justifyContent="center"
              ml={{ xs: 1, sm: 5, md: 7 }}
              spacing={3}
            >
              <Box>
                <MiniCard Image={icon1} Title="Quality Food" />
              </Box>
              <Box>
                <MiniCard Image={icon2} Title="Classical taste" />
              </Box>
            </Stack>
            <Stack
              direction="row"
              ml={{ xs: 1, sm: 5, md: 7 }}
              justifyContent="center"
              mt={3}
              spacing={3}
            >
              <Box>
                <MiniCard Image={icon3} Title="Skilled chef" />
              </Box>
              <Box>
                <MiniCard Image={icon4} Title="Best service" />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QualitySection;
