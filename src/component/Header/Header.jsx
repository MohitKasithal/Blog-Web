/*import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Innovative Ideas for a Better World
        </span>
        <span className="headerTitleLg">Beyond the Buzz</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
export default Header;
*/
import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const backgroundImage = `https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

const HeaderContainer = styled("div")({
  borderRadius: "10px",
  margin: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: " 65vh",
  position: "relative",
  overflow: "hidden",
  margintop: "5px",
  background: `linear-gradient(
      rgb(82 80 80 / 10%),
      rgba(255, 255, 255, 0.5)
    ),url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const HeaderTitles = styled("div")(({ theme }) => ({
  textAlign: "center",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4),
  },
}));

const HeaderTitleSm = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 600,
  color: "#333",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.5rem",
  },
}));

const HeaderTitleLg = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#333",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.6rem",
  },
}));

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitles>
        <HeaderTitleSm variant="h6">
          Innovative Ideas for a Better World
        </HeaderTitleSm>
        <HeaderTitleLg variant="h3">Beyond the Buzz</HeaderTitleLg>
      </HeaderTitles>
    </HeaderContainer>
  );
}

export default Header;
