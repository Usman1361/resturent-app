import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { testImage } from "../smallComponents/images";
const CustomerReview = () => {
  return (
    <Box>
      <Container>
        <Grid container mt={12} >
          <Grid item xs={12} md={12}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                textAlign: "center",
                color: "#3b413a",
                fontFamily: "Poppins",
              }}
            >
              What Our Customers Say
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box ml={{ xs: 0, sm: 20, md: 18 }} mt={4} alignContent="center">
              <Stack
                spacing={5}
                direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
              >
                <ReviewCard
                  Title="Sayed Ahmed"
                  Description="“Visited Shaif's Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again”"
                  Image={testImage}
                />
                <ReviewCard
                  Title="Arfan"
                  Description="“from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and attentive, food plentiful and delicious, desserts out of this world”"
                  Image={testImage}
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
                spacing={5}
                mt={5}
              >
                <ReviewCard
                  Title="Fahim & Nishat"
                  Description="“A warm and friendly welcome with fantastic customer service. Always great, tasty food served we love it . Would definitely recommend. We have been repeatedly and it's consistently exceeded our expectations”"
                  Image={testImage}
                />
                <ReviewCard
                  Title="Hussain"
                  Description="“I would just like to say thank you for excellent service we received in your restaurant last night. Although the place was very busy we still had an excellent time and really appreciated the live entertainment too!“"
                  Image={testImage}
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerReview;
