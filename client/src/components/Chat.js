import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "../styles/chat.scss";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    // socket.on("roomData", ({ users }) => {
    //   console.log(users);
    //   setUsers(users);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { message });
      setMessage("");
    } else alert("empty input");
  };

  return (
    <div className="chat">
      {messages.map((val, i) => {
        return (
          <div key={i} className="chat-room">
            {val.text}
            <br />
            <b className="chat-user">{val.user}</b>
          </div>
        );
      })}
      <form className="chat-form" action="" onSubmit={handleSubmit}>
        <input 
        className="chat-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input className="chat-input" type="submit" />
      </form>
    </div>
  );
};

export default Chat;