import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MiniCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 150,
        overflow: "visible",
        boxShadow: "none",
        borderRadius: "12px",
        backgroundColor: "#d6e5d8",
      }}
    >
      <CardMedia>
        <Box
          sx={{
            paddingTop: "28px",
            borderRadius: "12px",
          }}
        >
          <Box
            component="img"
            src={props.Image}
            width={50}
            height={50}
            sx={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Box>
      </CardMedia>
      <CardContent
        sx={{
          alignContent: "center",
          textAlign: "center",
          borderRadius: "12px",
          width: "150px",
          display: "block",
          padding: "10px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#3b413a",
            fontFamily: "Poppins",
            fontWeight: "less bold",
          }}
        >
          {props.Title}
        </Typography>
      </CardContent>
    </Card>
  );
}
