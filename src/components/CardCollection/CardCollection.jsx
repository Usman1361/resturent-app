import React from "react";
import Cards from "../Cards/Cards";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Grid, Box, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
const CardCollection = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container mt={6} sx={{ justifyContent: "center" }}>
          <Grid item xs={6} sm={3} md={2}>
            <Box>
              <Cards
                Icon={AccessTimeFilledIcon}
                Title="10 AM to 7 PM"
                Description="Opening Hour"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            md={2}
            sx={{
              paddingLeft: { xs: "12px", sm: "0px" },
              justifyContent: "left",
            }}
          >
            <Box>
              <Cards
                Icon={LocationOnIcon}
                Title="GEC, Chittagong"
                Description="Address"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={7}
            sm={3}
            md={2}
            sx={{
              paddingLeft: { xs: "12px", sm: "0px" },
              marginTop: { xs: "20px", sm: "0px" },
            }}
          >
            <Box>
              <Cards
                Icon={WifiCalling3Icon}
                Title="+880123443"
                Description="Call Now"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CardCollection;
