import { useState } from "react";
// import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnReactname, setbtnReactname] = useState("Login");
  return (
    <div className="header">
      <div className="Nav-items">
        <ul className="nav-links">
          <a href="/home">
            <li className="home">Home</li>
          </a>
          <a href="/categories">
            <li className="home">Categories</li>
          </a>

          <li className="About us">About us</li>
          <li className="Cart">Cart</li>
          <a href="/steps">
            <li className="steps">Buy Now</li>
          </a>
          <a href="/typeofdesign">
            <li className="steps">Type of design</li>
          </a>
          <a href="/measurements">
            <li className="steps">Measurement</li>
          </a>
          <a href="/address">
            <li className="steps">Address</li>
          </a>
          <button
            className="toggle-button"
            onClick={() => {
              btnReactname === "Login"
                ? setbtnReactname("Logout")
                : setbtnReactname("Login");
            }}
          >
            {btnReactname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
