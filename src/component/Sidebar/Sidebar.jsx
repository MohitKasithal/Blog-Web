// import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Welcome to our blog! We're passionate about creating a platform for
          people to explore a wide range of topics and connect with like-minded
          individuals.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Life"> */}
            Life
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Music"> */}
            Music
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Sport"> */}
            Sport
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Style"> */}
            Style
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Tech"> */}
            Tech
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Cinema"> */}
            Cinema
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
