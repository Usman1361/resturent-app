import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import {
  ourStory,
  ourGoal1,
  ourGoal2,
  ourGoal3,
} from "../components/smallComponents/images";

const About = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container mt={5}>
          <Grid item xs={12} md={6}>
            <Box ml={{ xs: 0, md: 3 }} sx={{ hight: "80%", width: "100%" }}>
              <Box
                component="img"
                variant="img"
                src={ourStory}
                sx={{ hight: "100%", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={10} md={5}>
            <Box ml={{ xs: 0, md: 10 }} mt={{ xs: 3, md: 7 }}>
              <Typography
                variant="h5"
                sx={{ color: "#3b413a", fontWeight: "600" }}
              >
                Our Story
              </Typography>
              <Typography variant="h6">It's all started since 1998</Typography>
              <Typography component="body2" sx={{ color: "#3f3c3c" }}>
                Welcome to Shaif's Cuisine. We take pride in delivering warm,
                friendly service and creating mouth-watering culinary delights
                for all. Using only the freshest locally sourced ingredients,
                we'll ensure you have a dining experience to remember.
              </Typography>
              <br />
              <br />
              <Typography component="body2" sx={{ color: "#3f3c3c" }}>
                Since 1998, we are the perfect place for a romantic meal for
                two, a catch-up with friends, family parties, business meetings,
                and bringing loved ones together. With comfortable surroundings,
                affordable prices, and seating for up to 65 guests, we can cater
                for all occasions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} mt={12}>
            <Box
              ml={{ xs: 0, md: 3 }}
              sx={{
                textAlign: { xs: "left", md: "center" },
                alignContent: { xs: "left", md: "center" },
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#3b413a", fontWeight: "600" }}
              >
                Our Goals
              </Typography>
              <Typography
                ml={{ xs: 0, md: 7 }}
                component="body2"
                sx={{ color: "#3f3c3c" }}
              >
                We shall sell delicious and remarkable food and beverages that
                meet the highest quality, freshness, and seasonality criteria
                while combining modern-creative and classic cooking traditions.
                By showcasing warmth, graciousness, efficiency, skill,
                professionalism, and integrity in our work, we will continually
                serve our consumers with exceptional service. To have every
                customer who comes through our doors leave impressed by their
                experience at Shaif's Cuisine and excited to come back again.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} mt={5}>
            <Box pl={{ xs: 0, md: 5 }} sx={{ width: "80%", hight: "80%" }}>
              <Box
                component="img"
                sx={{ width: "100%", hight: "100%" }}
                src={ourGoal1}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={6} mt={5}>
            <Box sx={{ width: "80%", hight: "80%" }}>
              <Box
                component="img"
                sx={{ width: "100%", hight: "100%" }}
                src={ourGoal2}
              />
              <Box
                mt={{ xs: 0, md: 3 }}
                component="img"
                sx={{ width: "100%", hight: "100%" }}
                src={ourGoal3}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
