import React from "react";
import { styled } from "@mui/system";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Posts from "../Posts/Posts";

const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const HomeContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "75%",
    padding: theme.spacing(3),
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
