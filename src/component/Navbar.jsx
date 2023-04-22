import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  Box,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const BarTop = styled(AppBar)({
  backgroundColor: "#dcdcdc66",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "static",
  flexDirection: "row",
  padding: "2px 10px",
});
const LinkBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
});
const LinkList = styled(Link)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});
const MenuBox = styled(Menu)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  alignItems: "center",
  width: "180px",
});
const MenuListItem = styled(MenuItem)({
  display: "flex",

  gap: "10px",

  width: "100%",
});

function Navbar() {
  // for drawer
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <MenuBox
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuListItem>
        <Link className="link" to="/">
          <HomeIcon /> HOME
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link className="link" to="/">
          <InfoIcon /> ABOUT
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link className="link" to="/write">
          <CreateIcon /> WRITE
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link
          className="link"
          to="/login"
          onClick={() => {
            handleLogout();
          }}>
          {" "}
          <LogoutIcon /> Logout
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Box className="userD">
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        </Box>
      </MenuListItem>
    </MenuBox>
  );

  const renderMobileLogout = (
    <MenuBox
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuListItem>
        <Link className="link" to="/login">
          <LoginIcon /> login
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link className="link" to="/register">
          <AppRegistrationIcon /> register
        </Link>
      </MenuListItem>
    </MenuBox>
  );
  // end

  const [userData, setUserData] = useState(false);
  const navigate = useNavigate("");
  const data = localStorage.getItem("user-info");

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
    setUserData(false);
  }
  useEffect(() => {
    if (data) {
      setUserData(true);
    }
  }, [data]);
  return (
    <>
      <BarTop>
        <Typography
          variant="h4"
          component={"h5"}
          sx={{ fontSize: { xs: "16px", sm: "20px" }, flex: "1" }}>
          BLOG
        </Typography>

        {userData ? (
          <LinkBox flex={"6"} sx={{ display: { xs: "none", sm: "flex" } }}>
            <LinkList>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 5px", lg: "20px" },
                  fontSize: { sm: "12px", md: "18px" },
                }}>
                <Link className="link" to="/">
                  HOME
                </Link>
              </ListItem>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { sm: "12px", md: "18px" },
                }}>
                ABOUT
              </ListItem>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { sm: "12px", md: "18px" },
                }}>
                CONTACT
              </ListItem>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { sm: "12px", md: "18px" },
                }}>
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </ListItem>

              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { sm: "12px", md: "18px" },
                }}
                onClick={() => {
                  handleLogout();
                }}>
                LOGOUT
              </ListItem>

              <Box className="userD">
                <Link className="link" to="/settings">
                  <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                </Link>
              </Box>
            </LinkList>
          </LinkBox>
        ) : (
          <LinkBox sx={{ display: { xs: "none", sm: "flex" } }}>
            <LinkList>
              <ListItem>
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </ListItem>
              <ListItem>
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </ListItem>
            </LinkList>
          </LinkBox>
        )}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit">
            <MoreIcon />
          </IconButton>
        </Box>
      </BarTop>
      {userData ? renderMobileMenu : renderMobileLogout}
      {/* {renderMenu} */}
    </>
  );
}
export default Navbar;
/**
 *   <div className="top">
      <div className="topLeft">
        <h1>BLOG</h1>
      </div>
      <div className="topCenter">
        {userData ? (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </li>

              <li
                className="topListItem"
                onClick={() => {
                  handleLogout();
                }}>
                LOGOUT
              </li>
            </ul>
            <div className="userD">
              <Link className="link" to="/settings">
                <img
                  className="topImg"
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </Link>

              <h4>{user && user.userName}</h4>
              <i className="topSearchIcon fas fa-search"></i>
            </div>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
 */
