import { useState } from "react";
// import { Link } from "react-router-dom";

const HeaderComponent = () => {
    const [btnReactname, setbtnReactname] = useState("Login");
    return (
      <div className="header">
        <div className="Nav-items">
          <ul className="nav-links">
            <li className="home">Home</li>
            <li className="About us">About us</li>
            <li className="Cart">Cart</li>
            <button className="toggle-button"
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
  