import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Rating, Stack } from "@mui/material";

export default function SmallCard(props) {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 400,
          maxHeight: 570,
          backgroundColor: "#d6e5d8",
          borderBlock: "none",
          overflow: "visible",
          boxShadow: "none",
          borderRadius: "12px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "row" },
          }}
        >
          <CardMedia>
            <Box
              //   p={}
              sx={{
                paddingTop: "28px",
                marginLeft: "10px",
                borderRadius: "12px",
              }}
            >
              <Box
                component="img"
                src={props.Image}
                width={150}
                height={150}
                alt="Picture of the dish"
                sx={{
                  display: "block",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
            </Box>
          </CardMedia>
          <CardContent>
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
            <Rating
              value={4}
              readOnly
              sx={{ color: "success.main" }}
              size="small"
            />
            <Typography
              variant="body2"
              component="div"
              sx={{
                color: "#3f3c3c",
                fontFamily: "Raleway",
                fontWeight: "400",
                lineHeight: "1.4em",
              }}
            >
              {props.Description}
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </Box>
  );
}
