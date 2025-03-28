
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "./AuthButton";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user || null);
  return (
    <div className="header">
      <div className="Nav-items">
        <ul className="nav-links">
          <a href="/">
            <li className="home">Home</li>
          </a>
          <a href="/login">
            <li className="home">Login</li>
          </a>
          <a href="/categories">
            <li className="home">Categories</li>
          </a>

          <li className="About us">About us</li>
          <li className="Cart">Cart</li>
          <a href="/steps">
            <li className="steps">Buy Now</li>
          </a>
        </ul>
      </div>
      <AuthButton />
    
      
    </div>
  );
};

export default HeaderComponent;
