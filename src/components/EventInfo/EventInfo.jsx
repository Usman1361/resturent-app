import React from "react";
import EventCard from "../EventCard/EventCard";
import { Box, Button, Grid, Typography, Stack, Container } from "@mui/material";
import { eventWedding, eventCorporate } from "../smallComponents/images";
import { Link } from "react-router-dom";

const EventInfo = () => {
  return (
    <Box>
      <Container>
        <Grid container mt={14} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <Stack direction="column" sx={{ alignItems: "center" }}>
              <Box>
                <EventCard
                  Description="Shaif's Cuisine is the perfect venue for your corporate events. We specialize in private parties"
                  Title="Corporate Events"
                  Image={eventWedding}
                />
              </Box>
              <Box mt={4}>
                <EventCard
                  Description="Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is sophisticated and comfortable."
                  Title="Weddings"
                  Image={eventCorporate}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={9} md={4}>
            <Box
              mt={4}
              sx={{
                paddingLeft: { xs: "32px", md: "0px" },
                textAlign: { xs: "left", sm: "center", md: "left" },
              }}
            >
              <Typography variant="h5">Book For Events</Typography>
              <Typography variant="body2" ml={{ xs: 0, sm: 5, md: 0 }}>
                Book your private event or corporate function at Shaif's cuisine
                to experience a truly unique experience.
              </Typography>
              <br />
              <Button variant="contained" color="success" size="small">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Now
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventInfo;
