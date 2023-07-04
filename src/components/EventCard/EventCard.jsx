import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box,  Container, Grid } from "@mui/material";

export default function SmallCard(props) {
  return (
    <Box>
      <Container>
        <Grid Container>
          <Box
            sx={{
              maxWidth: 500,
              // maxHeight: 590,
              backgroundColor: "#d6e5d8",
              borderBlock: "none",
              overflow: "visible",
              boxShadow: "none",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Grid xs={5} md={6}>
              <Box
                height="100%"
                width="100%"
                sx={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  // marginLeft: "10px",
                  padding: "15px",
                }}
              >
                <Box
                  component="img"
                  src={props.Image}
                  width="80%"
                  height="80%"
                  alt="Picture of the dish"
                  sx={{
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={7} md={6}>
              <Box mt={3}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#3b413a",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  {props.Title}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    color: "#3f3c3c",
                    fontFamily: "Raleway",
                    fontWeight: "400",
                    lineHeight: "1.6em",
                  }}
                >
                  {props.Description}
                </Typography>
              </Box>
            </Grid>
            {/* </Stack> */}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
