import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [userData, setUserData] = useState(false);
  const navigate = useNavigate();
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
    <div className="top">
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
  );
}
export default Navbar;
