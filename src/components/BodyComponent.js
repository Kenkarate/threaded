import React from "react";
import ReactDOM from "react-dom/client";
import { useState} from "react";


const BodyComponent = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      alert(`Logging in as: ${username}`);
    };
  
    return (
      <div className="login-container">
        
        <h2>Login</h2>
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  };
  
  export default BodyComponent;