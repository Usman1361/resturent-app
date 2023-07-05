import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "./smallComponents/images.jsx";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const drawerWidth = 240;
const navItems = ["Home", "Menu", "About", "Contact"];
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        marginTop: "20px",
        justifyContent: "space-around",
      }}
    >
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {i === 0 && (
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 1 && (
                <Link
                  to="/menu"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 2 && (
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
              {i === 3 && (
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary={item} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          mt={{ xs: 5, md: 0 }}
          color="success"
          variant="contained"
          size="small"
        >
          <Link
            to="/booktable"
            style={{ textDecoration: "none", color: "White" }}
          >
            Book Table
          </Link>
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <AppBar
            sx={{ boxShadow: "none", position: "static", bgcolor: "white" }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <img src={logo} width={80} height={80} alt="logo" />
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item, i) => (
                  <Button key={item} sx={{ color: "black", mx: 2 }}>
                    {i === 0 && (
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {item}
                      </Link>
                    )}
                    {i === 1 && (
                      <Link
                        to="/menu"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {item}
                      </Link>
                    )}
                    {i === 2 && (
                      <Link
                        to="/about"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText primary={item} />
                      </Link>
                    )}
                    {i === 3 && (
                      <Link
                        to="/contact"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <ListItemText primary={item} />
                      </Link>
                    )}
                  </Button>
                ))}

                <Button
                  color="success"
                  variant="contained"
                  size="small"
                  sx={{ marginLeft: "10px" }}
                >
                  <Link
                    to="/booktable"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Book Table
                  </Link>
                </Button>
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { sm: "block", md: "none" },
                  color: "black",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        display: "inline",
                        float: "right",
                      }}
                      onClick={() => setMobileOpen(!mobileOpen)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  {drawer}
                </Drawer>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>
    </>
  );
}

export default Header;
