import React from "react";
import { styled } from "@mui/system";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Posts from "../Posts/Posts";

const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "  row   ",
  },
}));

const HomeContent = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "9",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <Posts />
        </HomeContent>
        <Sidebar />
      </HomeContainer>
    </>
  );
}

export default Home;
