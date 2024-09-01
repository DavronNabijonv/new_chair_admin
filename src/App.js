import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tog, setTog] = useState(false);
  const [user_info, setUser_info] = useState({
    fullname: "",
    username: "",
    pasword: "",
  });
  return (
      <div className="togle_log">
        {tog ? (
          <div className="royhat">
            <input type="text" placeholder="To`liq ismingizni kiriting" />
            <input type="text" placeholder="Foydalanuvchi nomi" />
            <input type="text" placeholder="Parolni kiriting" />
            <button>Ro`yhatdan o`tish</button>
          </div>
        ) : (
          <div className="royhat">
            <input type="text" placeholder="Foydalanuvchi nomini kiriting" />
            <input type="text" placeholder="Parolni kiriting" />
            <button>Kirish</button>
          </div>
        )}
        {tog ? (
          <p className="change_txt">
            Akkaountga -- <span onClick={() => {setTog(false);}}>Kirish</span>
          </p>
        ) : (
          <p className="change_txt">
            Akkaunt -- <span onClick={() => { setTog(true);}}>yartaish</span>
          </p>
        )}
      </div>
  );
}

export default App;
