import { Grid, Typography, Box, Button, Container } from "@mui/material";
import React from "react";
import LongCard from "../LongCard/LongCard";
import { dish1, dish3 } from "../smallComponents/images";
import { Link } from "react-router-dom";

const LongCardSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2} ml={{ xs: 0, md: 5 }}>
          <Grid item xs={6} sm={4} md={3}>
            <Box>
              <LongCard
                Image={dish3}
                Title="Sweet Potato Fries Bowl"
                Description="These Sweet Potato Fries bowl are a glorious, messy plate of
            goodness. Crispy sweet potato fries loaded with lots of fresh summer
            vegetables and a lime ranch. By adding a seasoning blend with
            chipotle powder, garlic, and onion, these spicy sweet potato fries
            are full of flavor."
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <LongCard
              Image={dish1}
              Title="Vegan Salad bowl"
              Description="Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion of flavors and textures."
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{ display: "flex", justifyContent: "left" }}
          >
            <Box
              sx={{
                mt: { xs: 4, sm: 35 },
                ml: 4,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Our Specials
              </Typography>
              <Typography variant="body2">
                All of our food is prepared daily at <br /> our restaurants to
                ensure the <br /> highest quality, freshest meals are <br />
                delivered to our customers
              </Typography>
              <br />
              <Button variant="contained" color="success" size="small">
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
      </Container>
    </Box>
  );
};

export default LongCardSection;
