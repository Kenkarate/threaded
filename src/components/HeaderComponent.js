
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "./AuthButton";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user || null);
  return (
    <div className="w-full h-[10vh]  bg-blue-300 grid grid-cols-4 text-center">
      <div className="text-2xl my-auto font-bold"><a href="/">LOGO</a></div>
      <div className="Nav-items col-span-2 my-auto lg:visible invisible">
        <ul className="nav-links grid lg:grid-cols-5 ">
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
<<<<<<< HEAD
      <AuthButton />
    
      
=======
      <div className="my-auto">
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
      </div>
      <div></div>
>>>>>>> 4354f48ca33121a1b955135749914fa547115aa5
    </div>
  );
};

export default HeaderComponent;
