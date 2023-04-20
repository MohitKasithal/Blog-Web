import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { AppBar, Box, ListItem, Typography } from "@mui/material";

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

function Navbar() {
  const [userData, setUserData] = useState(false);
  const navigate = useNavigate("");
  const data = localStorage.getItem("user-info");
  const user = JSON.parse(localStorage.getItem("user-info"));

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
          <LinkBox flex={"6"}>
            <LinkList>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 5px", lg: "20px" },
                  fontSize: { xs: "12px", sm: "18px" },
                }}>
                {userData ? (
                  <Link className="link" to="/">
                    HOME
                  </Link>
                ) : (
                  <Link className="link" to="/login">
                    login
                  </Link>
                )}
              </ListItem>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { xs: "12px", sm: "18px" },
                }}>
                ABOUT
              </ListItem>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { xs: "12px", sm: "18px" },
                }}>
                CONTACT
              </ListItem>
              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { xs: "12px", sm: "18px" },
                }}>
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </ListItem>

              <ListItem
                sx={{
                  padding: { xs: "0px 10px", md: "0px 10px", lg: "10px" },
                  fontSize: { xs: "8px", sm: "18px" },
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

                <Typography variant="p">{user && user.userName}</Typography>
                {/* <i className="topSearchIcon fas fa-search"></i> */}
              </Box>
            </LinkList>
          </LinkBox>
        ) : (
          <LinkBox>
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
      </BarTop>
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
