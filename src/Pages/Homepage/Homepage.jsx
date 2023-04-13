import Header from "../../component/Header/Header";
import Posts from "../../component/Posts/Posts";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Homepage.css";

export default function Homepage() {
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
