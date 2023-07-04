import React from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { logo } from "./smallComponents/images.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "#d6e5d8" }} mt={12} pb={4}>
        <Container maxWidth="xl">
          <Grid container pt={4} spacing={2}>
            <Grid item xs={12} md={3}>
              <Box>
                <Box component="img" src={logo} hight={150} width={150} />
              </Box>
              <Box mt={5}>
                <Typography variant="body1" component="div">
                  Fresh and delicious traditional <br /> Bangladeshi food to
                  delight the <br /> whole family.
                </Typography>
                <Typography variant="h6" component="h6" mt={3}>
                  Follow us
                </Typography>
              </Box>
              {["Facebook", "Twitter", "Instagram"].map((item) => (
                <Box pt={5} sx={{ display: "inline" }}>
                  <IconButton
                    size="small"
                    sx={{
                      border: "1px solid #a2de96",
                      bgcolor: "#e8e8e8",
                      borderRadius: "8px",
                      marginRight: "10px",
                    }}
                  >
                    {item === "Facebook" && <FacebookIcon fontSize="large" />}
                    {item === "Twitter" && <TwitterIcon fontSize="large" />}
                    {item === "Instagram" && <InstagramIcon fontSize="large" />}
                  </IconButton>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                component="h6"
                sx={{ fontWeight: "bold" }}
                ml={1}
                mb={2}
              >
                Links
              </Typography>
              {[
                "Home",
                "Menu",
                "Book Table",
                "About Us",
                "Contact Us",
                "Privacy Policy",
              ].map((item) => (
                <Box>
                  <Button variant="text" sx={{ color: "black" }}>
                    {item}
                  </Button>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                component="h6"
                sx={{ fontWeight: "bold" }}
                ml={1}
                mb={2}
              >
                Support
              </Typography>
              {["Contact", "Support Center", "Feedback"].map((item) => (
                <Box>
                  <Button variant="text" sx={{ color: "black" }}>
                    {item}
                  </Button>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                component="h6"
                sx={{ fontWeight: "bold" }}
                ml={1}
                mb={2}
              >
                Contact
              </Typography>
              {[
                "+880123",
                "webcifar@gmail.com",
                "GEC Circle, Chittagong, Bangladesh",
              ].map((item) => (
                <Box>
                  <Button variant="text" sx={{ color: "black" }}>
                    {item}
                  </Button>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Typography component="h6">
          © copyright 2021 Shaif's Cuisine | All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
