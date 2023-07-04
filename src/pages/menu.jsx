import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import SmallCard from "../components/SmallCard/SmallCard";
import { dish3, dish1 } from "../components/smallComponents/images";

const menu = () => {
  let arr = [1, 2, 3];
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container mt={5}>
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: "#3b413a", fontWeight: 600 }}
              >
                Explore Our Menu
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography
                variant="h6"
                sx={{ color: "#3b413a", fontWeight: 600 }}
              >
                Our Specials
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box mr={{ xs: 0, md: 3 }} mt={3}>
              <SmallCard
                Title="Sweet Potato Fries Bowl"
                Image={dish3}
                Direction="row"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mt={3}>
              <SmallCard
                Title="Vegan Salad bowl"
                Image={dish1}
                Direction="row"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography
                variant="h6"
                sx={{ color: "#3b413a", fontWeight: 600 }}
              >
                Top Dishes
              </Typography>
            </Box>
          </Grid>

          {arr.map((item) => (
            <Grid item xs={6} md={4}>
              <Box mr={{ xs: 1, md: 3 }} mt={3}>
                <SmallCard Title="Hot Green Bowl" Image={dish1} />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography
                variant="h6"
                sx={{ color: "#3b413a", fontWeight: 600 }}
              >
                Breakfast
              </Typography>
            </Box>
          </Grid>

          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item xs={6} md={4}>
              <Box mr={{ xs: 1, md: 3 }} mt={3}>
                <SmallCard Title="Hot Green Bowl" Image={dish1} />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography
                variant="h6"
                sx={{ color: "#3b413a", fontWeight: 600 }}
              >
                Lunch
              </Typography>
            </Box>
          </Grid>

          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item xs={6} md={4}>
              <Box mr={{ xs: 1, md: 3 }} mt={3}>
                <SmallCard Title="Hot Green Bowl" Image={dish1} />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography
                variant="h6"
                sx={{ color: "#3b413a", fontWeight: 600 }}
              >
                Dinner
              </Typography>
            </Box>
          </Grid>

          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item xs={6} md={4}>
              <Box mr={{ xs: 1, md: 3 }} mt={3}>
                <SmallCard Title="Hot Green Bowl" Image={dish1} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default menu;
