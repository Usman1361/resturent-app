import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Container, Rating } from "@mui/material";

export default function LongCard(props) {
  return (
    <Box position="relative" mt={24}>
      <Container maxWidth="xl">
        <Box>
          <Box
            sx={{
              hight: { xs: "150px", sm: "100%" },
              width: { xs: "80%", sm: "80%", md: "70%" },
              p: 2,
              margin: "auto",
              marginBottom: "-60px",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={props.Image}
              width="100%"
              hight="100%"
              sx={{
                borderRadius: "12px",
                objectFit: "cover",
                verticalAlign: "middle",
              }}
            />
          </Box>
          <Card
            sx={{
              backgroundColor: "#d6e5d8",
              width: "100%",
              paddingTop: "60px",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Box sx={{ justifyContent: "left" }}>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontSize: "1.4rem", lineHeight: "1.0" }}
                >
                  {props.Title}
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  color="success"
                  sx={{ fontSize: "1.0rem" }}
                >
                  $18
                </Typography>
                <Rating
                  value={4}
                  size="small"
                  readOnly
                  sx={{ color: "success.main" }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "15px", sm: "1.2rem" },
                    lineHeight: "1.4",
                    fontFamily: "Raleway",
                  }}
                >
                  {props.Description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
