import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";

export default function Cards(props) {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Card
            sx={{
              maxWidth: 145,
              maxHeight: 200,
              boxShadow: "none",
              borderRadius: "12px"
            }}
          >
            <CardContent
              sx={{
                alignContent: "center",
                textAlign: "center",
                backgroundColor: "#d6e5d8",
                padding: "5px",
                paddingY: "30px",
              }}
            >
              {React.createElement(props.Icon, {
                color: "success",
                fontSize: "large",
                sx: { alignContent: "center" },
              })}
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "small" }}
              >
                {props.Title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "small" }}
              >
                {props.Description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
