import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [post, setPost] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "pass") {
      setIsLoggedIn(true);
    }
  };

  const handlePost = () => {
    setPost(`${username}: ${message}`);
    setMessage("");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message"
          />
          <button onClick={handlePost}>Post</button>
          <p>{post}</p>
        </div>
      )}
    </div>
  );
}

export default App;
