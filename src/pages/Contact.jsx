import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import CardCollection from "../components/CardCollection/CardCollection";
const Contact = () => {
  let data = ["First Name", "Last Name", "Email", "Subject", "Message"];
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={12}>
            <CardCollection />
          </Grid>
          <Grid item md={12} mt={10}>
            <Typography
              ml={{ xs: 0, md: 4 }}
              variant="h4"
              sx={{ color: "#3b413a", fontWeight: "600" }}
            >
              Contact & Inquiry
            </Typography>
          </Grid>
          {data.map((item, i) => (
            <Grid xs={12} md={i === 4 ? 12 : 6}>
              <Box ml={{ xs: 0, md: 4 }} mt={4}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#3f3c3c",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
                <br />
                <TextField
                  size="large"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#d6e5d8",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  rows={i === 4 ? 8 : undefined}
                  multiline={i === 4 ? true : false}
                />
              </Box>
            </Grid>
          ))}
          <Grid md={12}>
            <Box ml={{ xs: 0, md: 4 }} mt={4} mb={5}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  color: "#e8e8e8",
                  bgcolor: "#26643b",
                  padding: "1rem 4rem",
                  borderRadius: "8px",
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
