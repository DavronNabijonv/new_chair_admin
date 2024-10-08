import "./logIn.scss";
import React, { useCallback, useContext, useState } from "react";
import { create_Admin } from "../barcha_sorovlar/post/auth_post";
import { useNavigate } from "react-router-dom";
import { GetAccessToken, ResponseMessage, ShowError } from "../App";
import Error_res from "./suc_err/error";

function LogIn() {
  const create_url = `/auth/add`;  // Relative ppath
  const logIn_url = `/auth/login`; // Relative path

  const { error_response, setError_response } = useContext(ShowError);
  const { setRes_message } = useContext(ResponseMessage);
  const { setToken } = useContext(GetAccessToken);
  const [tog, setTog] = useState(false);

  const navigate = useNavigate();
  
  const [user_info, setUser_info] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const [log_info, setLog_info] = useState({
    username: '',
    password: ''
  });

  const handleChangeUser_info = (e) => {
    setUser_info({ ...user_info, [e.target.name]: e.target.value });
  };

  const handleChangeLog_info = (e) => {
    setLog_info({ ...log_info, [e.target.name]: e.target.value });
  };

  const remove_PopUP = useCallback(() => {
    setTimeout(() => {
      setError_response(false);
    }, 3000);
  }, []);

  const check_response = async (url, info) => {
    const res = await create_Admin(url, info);

    if (res.success) {
        setToken(res.response?.data?.access_token);
        console.log('token:', res.response?.data?.access_token)
        navigate("/main_page");
    } else {
        setRes_message(res.response?.data?.message || "An error occurred");
        setError_response(true);
        remove_PopUP();
    }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();  // Prevent default form submission
    check_response(create_url, user_info);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();  // Prevent default form submission
    check_response(logIn_url, log_info);
  };

  return (
    <>
      <div className="togle_log">
        {error_response && <Error_res />}
        {tog ? (
          <form onSubmit={handleSubmitRegister} className="royhat">
            <input
              type="text"
              placeholder="To`liq ismingizni kiriting"
              name="fullname"
              value={user_info.fullname}
              onChange={handleChangeUser_info}
              required
            />
            <input
              type="text"
              placeholder="Foydalanuvchi nomi"
              name="username"
              value={user_info.username}
              onChange={handleChangeUser_info}
              required
            />
            <input
              type="password"
              placeholder="Parolni kiriting"
              name="password"
              value={user_info.password}
              onChange={handleChangeUser_info}
              required
            />
            <button type="submit">Ro`yhatdan o`tish</button>
          </form>
        ) : (
          <form onSubmit={handleSubmitLogin} className="royhat">
            <input
              type="text"
              placeholder="Foydalanuvchi nomi"
              name="username"
              value={log_info.username}
              onChange={handleChangeLog_info}
              required
            />
            <input
              type="password"
              placeholder="Parolni kiriting"
              name="password"
              value={log_info.password}
              onChange={handleChangeLog_info}
              required
            />
            <button type="submit">Kirish</button>
          </form>
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
    </>
  );
}

export default LogIn;
