import { useState } from "react";
import axios from "axios";

const projectID = "eeb9ac1c-2e89-4f95-aaa8-aa63b6cd7f85";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Login yoki Parol xato!");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Ilova</h1>
        <p className="desc">Agar sizda akkaunt bo'lmasa <span style={{color:"aqua"}}>Mehmon</span> va <span style={{color:"aqua"}}>123456</span></p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Chatni boshlash</span>
            </button>
          </div>
        </form>
        <h1 style={{
          color:"red"
        }}>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
