import "./logIn.scss";
import React, { useCallback, useState } from "react";
import { create_Admin } from "../barcha_sorovlar/post/auth_post";
import { useNavigate } from "react-router-dom";  // Step 2: Import useNavigate

function LogIn() {
  const create_url = 'http://194.226.49.125:8000/v1/api/auth/add';
  const logIn_url = 'http://194.226.49.125:8000/v1/api/auth/login';

  const [error_txt, setError_txt] = useState();
  const [response_txt, setResponse_txt] = useState();
  const [togle_text, setTogle_text] = useState(false);
  const [tog, setTog] = useState(false);
  
  const navigate = useNavigate();  // Moved useNavigate hook to the top of the component

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
      setTogle_text(false);
    }, 3000);
  }, []);

  const check_response = async (url, info) => {
    try {
      const res = await create_Admin(url, info);
      console.log(res);

      if (res && res.data && res.data.id) {
        setResponse_txt(`Foydalanuvchi ro'yhatdan o'tkazildi.`);
        setError_txt(null);  // Clear error text if successful
        setTogle_text(true);
        remove_PopUP();
        navigate("/main_page");  // Navigate is correctly used here
      } else {
        throw new Error("Failed to create user.");
      }
    } catch (error) {
      setError_txt(error.response?.data?.message || error.message);
      setResponse_txt(null);  // Clear response text if there is an error
      setTogle_text(true);
      remove_PopUP();
    }
  };

  return (
    <>
      <div className="togle_log">
        {togle_text && <Show_error txt_error={error_txt} txt_response={response_txt} />}
        {tog ? (
          <div className="royhat">
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
              type="text"
              placeholder="Parolni kiriting"
              name="password"
              value={user_info.password}
              onChange={handleChangeUser_info}
              required
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
              required
            />
            <input
              type="text"
              placeholder="Parolni kiriting"
              name="password"
              value={log_info.password}
              onChange={handleChangeLog_info}
              required
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
    </>
  );
}

export default LogIn;

function Show_error({ txt_error, txt_response }) {
  return (
    <div className={txt_error ? "show_error" : "show_response"}>
      {txt_error || txt_response}
    </div>
  );
}
