import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import React from "react";

const NewsLetter = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Box ml={{ xs: 0, sm: 10, md: 5 }} mt={15}>
            <Card
              sx={{
                maxWidth: 1500,
                maxHeight: 570,
                backgroundColor: "#a2de96",
                borderBlock: "none",
                overflow: "visible",
                boxShadow: "none",
                borderRadius: "12px",
              }}
            >
              <CardContent
                sx={{
                  display: { xs: "block", md: "flex" },
                  flexDirection: "space-between",
                }}
              >
                <Grid item xs={12} md={7}>
                  <Box
                    mr={{ xs: 0, sm: 5, md: 12 }}
                    mt={4}
                    ml={{ xs: 0, md: 2 }}
                  >
                    <Typography
                      component="h3"
                      variant="h3"
                      sx={{
                        color: "#3b413a",
                        fontFamily: "Poppins",
                        marginBottom: "1.3rem",
                      }}
                    >
                      Join Newsletter
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#3f3c3c", fontFamily: "Raleway" }}
                    >
                      Get notified with the latest news and recent offers from
                      the “Shaif's Cuisine”
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={5} xs={12}>
                  <Box mt={{ xs: 4, md: 7 }} ml={{ xs: 2, md: 12 }}>
                    <TextField
                      label="Your Email Address"
                      color="success"
                      size="small"
                      sx={{ bgcolor: "white" }}
                    />
                    <Button variant="contained" sx={{ bgcolor: "#26643b" }}>
                      join
                    </Button>
                  </Box>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsLetter;
