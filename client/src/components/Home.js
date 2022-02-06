import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="home">
      <h1 className="home-title">Home Page</h1>
      <div className="home-container">
        <input
        className="home-input"
          placeholder="Name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="home-container">
        <input
        className="home-input"
          placeholder="Room"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
          required
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className="home-btn" type="submit">Sign In</button>
      </Link>
    </div>
  );
};

export default Home;