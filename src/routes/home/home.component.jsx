import { Link } from "react-router-dom";

import "./home.styles.css";

const Home = function () {
  return (
    <div className="home-page-container">
      <h1>Home page</h1>
      <div className="links-container">
        <Link to="/about">About</Link>
        <Link to="/head-and-tail">Head & Tail</Link>
      </div>
    </div>
  );
};

export default Home;
