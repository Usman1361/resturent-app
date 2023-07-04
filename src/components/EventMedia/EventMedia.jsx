import { Box, Grid, IconButton, Container } from "@mui/material";
import React from "react";
import {
  eventMedia1,
  eventMedia2,
  playButton,
} from "../smallComponents/images";
import { Link } from "react-router-dom";

const EventMedia = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={3} mt={10} sx={{ justifyContent: "center" }}>
          <Grid item xs={8} md={6}>
            <Box height="100%" width="100%" sx={{ position: "relative" }}>
              <Box
                component="img"
                src={eventMedia1}
                height="100%"
                width="100%"
              />
              <IconButton
                size="large"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  msTransform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                <Link>
                  <img
                    src={playButton}
                    width={80}
                    height={100}
                    alt="PlayButton"
                  />
                </Link>
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            <Box height="100%" width="100%">
              <Box
                component="img"
                src={eventMedia2}
                height="100%"
                width="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EventMedia;
