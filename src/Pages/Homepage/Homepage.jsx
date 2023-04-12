import { useLocation } from "react-router";
import Header from "../../component/Header/Header";
import Posts from "../../component/Posts/Posts";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />

        <Sidebar />
      </div>
    </>
  );
}
