import Sidebar from "../../component/Sidebar/Sidebar";
import SinglePost from "../../component/Singlepost/Singlepost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
