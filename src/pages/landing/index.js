import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="home-container">
      <div className="home-field">
        <h2 className="home-header">Hello</h2>
        <span className="home-intro">
          Coffee is darkly colored, bitter, slightly acidic and has a
          stimulating effect in humans, primarily due to its caffeine content.
          It is one of the most popular drinks in the world and can be prepared
          and presented in a variety of ways (e.g., espresso, French press,
          caffè latte, or already-brewed canned coffee).
        </span>
        <Link to="/signin">
          <button className="home-button">Buy me a Coffee</button>
        </Link>
      </div>
      <div className="img-coffee">
        <img src={"./Coffee.png"} alt="coffee" />
      </div>
    </div>
  );
}

export default LandingPage;
