import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const BookTable = () => {
  let data = ["First Name", "Last Name", "Email"];
  const [table, setTable] = useState("choose");
  const [time, setTime] = useState("");
  const [guestNumber, setGuestNumber] = useState(0);

  const handleChange = (event) => {
    setTable(event.target.value);
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={12} mt={10}>
            <Typography
              ml={{ xs: 0, md: 4 }}
              variant="h4"
              sx={{ color: "#3b413a", fontWeight: "600" }}
            >
              Book Table
            </Typography>
          </Grid>
          {data.map((item) => (
            <Grid xs={12} md={6}>
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
                />
              </Box>
            </Grid>
          ))}
          <Grid xs={12} md={6}>
            <Box ml={{ xs: 0, md: 4 }} mt={4}>
              <Typography
                variant="h6"
                sx={{
                  color: "#3f3c3c",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
              >
                Table Type
              </Typography>
              <br />
              <Select
                value={table}
                onChange={handleChange}
                sx={{
                  color: "#3f3c3c",
                  width: "100%",
                  backgroundColor: "#d6e5d8",
                }}
              >
                <MenuItem value="choose">
                  <em>Choose</em>
                </MenuItem>
                <MenuItem value={10}>Small (2 Persons)</MenuItem>
                <MenuItem value={20}>Small (4 Persons)</MenuItem>
                <MenuItem value={30}>Large (6 Persons)</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box ml={{ xs: 0, md: 4 }} mt={4}>
              <Typography
                variant="h6"
                sx={{
                  color: "#3f3c3c",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
              >
                Guest Number
              </Typography>
              <TextField
                type="number"
                value={guestNumber}
                onChange={(event) =>
                  setGuestNumber(parseInt(event.target.value))
                }
                sx={{
                  backgroundColor: "#d6e5d8",
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box ml={{ xs: 0, md: 4 }} mt={4}>
              <Typography
                variant="h6"
                sx={{
                  color: "#3f3c3c",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
              >
                Time
              </Typography>
              <TextField
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                sx={{
                  backgroundColor: "#d6e5d8",
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box ml={{ xs: 0, md: 4 }} mt={4}>
              <Typography
                variant="h6"
                sx={{
                  color: "#3f3c3c",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
              >
                Note
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
                rows={4}
                multiline
              />
            </Box>
          </Grid>
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
                Book Table
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookTable;
