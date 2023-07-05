import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SmallCard from "../SmallCard/SmallCard";
import { dish1, dish2, dish7 } from "../smallComponents/images";

const SmallCardPortion = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container mt={14} mb={3}>
          <Grid item xs={12} md={10} ml={{ xs: 2, sm: 5, md: 5 }}>
            <Typography
              variant="h6"
              fontSize="large"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Top Dishes
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box mt={{ xs: 3, sm: 3, md: 0 }} ml={{ xs: 0, sm: 5, md: 2 }}>
              <SmallCard Title="Vegan Salad bowl" Image={dish1} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box mt={{ xs: 3, sm: 3, md: 0 }} ml={{ xs: 2, sm: 5, md: 2 }}>
              <SmallCard Title="Vegan Pesto Zoodle" Image={dish2} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box mt={{ xs: 3, sm: 3, md: 0 }} ml={{ xs: 0, sm: 5, md: 2 }}>
              <SmallCard Title="Hot Green Bowl" Image={dish7} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SmallCardPortion;
