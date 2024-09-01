import "./App.css";
import React, { useState } from "react";
import { create_Admin } from "./barcha_sorovlar/post/auth_post";

function App() {
  const create_url = 'http://194.226.49.125:8000/v1/api/auth/add';
  const logIn_url = 'http://194.226.49.125:8000/v1/api/auth/login';

  const [error_txt,setError_txt] = useState('');
  const [tog, setTog] = useState(false);
  const [user_info, setUser_info] = useState({
    fullname: "",
    username: "",
    password: "", // Correct spelling here
  });
  
  const [log_info, setLog_info] = useState({
    username: '',
    password: '' // Correct spelling here
  });

  const handleChangeUser_info = (e) => {
    setUser_info({ ...user_info, [e.target.name]: e.target.value });
  };

  const handleChangeLog_info = (e) => {
    setLog_info({ ...log_info, [e.target.name]: e.target.value });
  };

  const check_response = (url,info) =>{
    const res = create_Admin(url,info);
    if(res.acces_token){
      
    }else{
      if(res.status===409){
        setError_txt('Foydalanuvchi oldin ro`yhatdan o`tgan')
      }else{
        setError_txt('Xatolik yuz berdi');
      }
    }
  }

  return (
    <div className="togle_log">
      {tog ? (
        <div className="royhat">
          <input 
            type="text" 
            placeholder="To`liq ismingizni kiriting" 
            name="fullname"
            value={user_info.fullname}
            onChange={handleChangeUser_info}
          />
          <input 
            type="text" 
            placeholder="Foydalanuvchi nomi" 
            name="username"
            value={user_info.username}
            onChange={handleChangeUser_info}
          />
          <input 
            type="text" 
            placeholder="Parolni kiriting" 
            name="password" // Correct spelling here
            value={user_info.password}
            onChange={handleChangeUser_info}
          />
          <button onClick={() => { check_response(create_url, user_info) }}>Ro`yhatdan o`tish</button>
        </div>
      ) : (
        <div className="royhat">
          <input 
            type="text" 
            placeholder="Foydalanuvchi nomi" 
            name="username"
            value={log_info.username}
            onChange={handleChangeLog_info}
          />
          <input 
            type="text" 
            placeholder="Parolni kiriting" 
            name="password" // Correct spelling here
            value={log_info.password}
            onChange={handleChangeLog_info}
          />
          <button onClick={() => { check_response(logIn_url, log_info) }}>Kirish</button>
        </div>
      )}
      {tog ? (
        <p className="change_txt">
          Akkaountga -- <span onClick={() => { setTog(false); }}>Kirish</span>
        </p>
      ) : (
        <p className="change_txt">
          Akkaunt -- <span onClick={() => { setTog(true); }}>yartaish</span>
        </p>
      )}
    </div>
  );
}

export default App;


function Show_error(txt){
  return(
    <div className="show_error">
      {error_txt}
    </div>
  )
}