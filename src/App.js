import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  
  return (
    <div className="App">
      {isLoggedIn ?(
        <div className="counter">
          <p>Hello, {username}</p>
          <p>Count: {count}</p>
          <button className="increment-button" onClick={() => setCount(count + 1)}>+</button>
          <button className="decrement-button" onClick={() => setCount(count - 1)}>-</button>
          <button className="logout-button" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div className="login">
          <p>Please enter your username:</p>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          <button className="login-button" onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
