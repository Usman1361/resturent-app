import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { testImage } from "../smallComponents/images";
const CustomerReview = () => {
  let customerData = [
    {
      name: "Sayed Ahmed",
      reviewText:
        "“Visited Shaif's Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again”",
    },
    {
      name: "Arfan",
      reviewText:
        "“from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and attentive, food plentiful and delicious, desserts out of this world”",
    },
    {
      name: "Fahim & Nishat",
      reviewText:
        "“A warm and friendly welcome with fantastic customer service. Always great, tasty food served we love it . Would definitely recommend. We have been repeatedly and it's consistently exceeded our expectations”",
    },
    {
      name: "Hussain",
      reviewText:
        "“I would just like to say thank you for excellent service we received in your restaurant last night. Although the place was very busy we still had an excellent time and really appreciated the live entertainment too!“",
    },
  ];

  return (
    <Box>
      <Container>
        <Grid container mt={12} sx={{ justifyContent: "center" }}>
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
          {customerData.map(({ name, reviewText }) => (
            <Grid item mt={4} sx={12} md={6}>
              <Box ml={{ xs: 0, md: 10 }}>
                <ReviewCard
                  Title={name}
                  Description={reviewText}
                  Image={testImage}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerReview;
