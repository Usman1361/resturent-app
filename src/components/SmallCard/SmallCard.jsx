import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Rating, Stack, Grid } from "@mui/material";

export default function SmallCard(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#d6e5d8",
        borderRadius: "12px",
        maxWidth: { xs: 480, md: 595 },
        maxHeight: { xs: 300, md: 250 },
        // height: { xs: 300, md: 200 },
        
      }}
    >
      <Container maxWidth="xl">
        {/* <Card
        sx={{
          maxWidth: { xs: 180, md: 595 },
          maxHeight: { xs: 320, md: 380 },
          // maxWidth: 395,
          backgroundColor: "#d6e5d8",
          borderBlock: "none",
          overflow: "visible",
          boxShadow: "none",
        }}
      > */}
        <Grid Container>
          <Stack
            sx={{
              display: "flex",
              flexDirection: {
                xs: props.Direction === "row" ? "row" : "column",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={7}>
              <Box
                mt={1}
                //   p={}
                height="80%"
                width="100%"
                sx={{
                  paddingTop: { xs: "10px", md: "12px" },
                  overflow: "hidden",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: "12px",
                }}
              >
                <Box
                  component="img"
                  src={props.Image}
                  height="100%"
                  width="100%"
                  sx={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box mt={{ xs: 2, md: 4 }} ml={1}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {props.Title}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  color="success.main"
                  sx={{ fontWeight: "bold" }}
                >
                  $12
                </Typography>
                <Rating value={4} readOnly sx={{ color: "green" }} />
              </Box>
            </Grid>
          </Stack>
        </Grid>
        {/* </Card> */}
      </Container>
    </Box>
  );
}
