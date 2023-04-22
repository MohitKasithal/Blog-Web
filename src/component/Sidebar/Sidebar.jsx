// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebarItem">
//         <span className="sidebarTitle">ABOUT ME</span>
//         <img
//           src="https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           alt=""
//         />
//         <p>
//           Welcome to our blog! We're passionate about creating a platform for
//           people to explore a wide range of topics and connect with like-minded
//           individuals.
//         </p>
//       </div>
//       <div className="sidebarItem">
//         <span className="sidebarTitle">CATEGORIES</span>
//         <ul className="sidebarList">
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Life">
//               Life
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Music">
//               Music
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Sport">
//               Sport
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Style">
//               Style
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Tech">
//               Tech
//             </Link>
//           </li>
//           <li className="sidebarListItem">
//             <Link className="link" to="/posts?cat=Cinema">
//               Cinema
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="sidebarItem">
//         <span className="sidebarTitle">FOLLOW US</span>
//         <div className="sidebarSocial">
//           <i className="sidebarIcon fab fa-facebook-square"></i>
//           <i className="sidebarIcon fab fa-instagram-square"></i>
//           <i className="sidebarIcon fab fa-pinterest-square"></i>
//           <i className="sidebarIcon fab fa-twitter-square"></i>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import MuiAvatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

const SidebarContainer = styled("div")(({ theme }) => ({
  padding: "10px",
  flex: "3",
  height: "fit-content",
  display: "flex",
  backgroundColor: " #f9f9f9",
  borderRadius: "10px",
  margin: " 0px 6px",
  flexDirection: "column",
  alignItems: "center",
}));

const SidebarItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
  width: "100%",
}));

const SidebarTitle = styled("span")(({ theme }) => ({
  margin: "10px",
  padding: "5px",
  width: "80%",
  borderTop: `solid 1px #a7a4a4`,
  borderBottom: `solid 1px #a7a4a4`,
  textAlign: "center",
  fontFamily: `"Varela Round", sans-serif`,
  fontSize: "12px",
  lineHeight: "19px",
  color: "#222222",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const SidebarText = styled("p")(({ theme }) => ({
  marginTop: "10px",
  padding: "20px",
}));

const SidebarList = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  padding: "0",
  marginTop: "20px",
  textAlign: "center",
  width: "100%",
  margin: "10px",
}));

const SidebarListItem = styled("li")(({ theme }) => ({
  marginBottom: "10px",
  display: "inline-block",
  width: " 50%",
  marginTop: "15px",
  cursor: "pointer",
}));

const SidebarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#000",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#007bff",
  },
}));

const SidebarSocial = styled(Stack)(({ theme }) => ({
  marginTop: "15px",
  width: "  80% ",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const SidebarIcon = styled("div")(({ theme }) => ({
  margin: "0px 10px",
  width: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#007bff",
  },
}));

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarTitle>ABOUT ME</SidebarTitle>
        <MuiAvatar
          src="https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <SidebarText>
          Welcome to our blog! We're passionate about creating a platform for
          people to explore a wide range of topics and connect with like-minded
          individuals.
        </SidebarText>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>CATEGORIES</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            <SidebarLink to="/posts?cat=Life">Life</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink to="/posts?cat=Music">Music</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink to="/posts?cat=Sport">Sport</SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink to="/posts?cat=Style">Style</SidebarLink>
          </SidebarListItem>
        </SidebarList>
      </SidebarItem>
      <SidebarSocial>
        <SidebarIcon>
          <InstagramIcon />
        </SidebarIcon>
        <SidebarIcon>
          <FacebookIcon />
        </SidebarIcon>
        <SidebarIcon>
          <PinterestIcon />
        </SidebarIcon>
        <SidebarIcon>
          <TwitterIcon />
        </SidebarIcon>
      </SidebarSocial>
    </SidebarContainer>
  );
}
export default Sidebar;
