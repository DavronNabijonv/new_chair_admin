import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./sahifalar/logIn";
import MainPage from "./sahifalar/mainPage";

export const ShowError = React.createContext();
export const ShowSuccess = React.createContext();
export const ModalTogle = React.createContext();
export const ResponseMessage = React.createContext();

function App() {
  const [error_response, setError_response] = useState(false);
  const [success_response, setSuccess_response] = useState(false);
  const [mod_togle, setMod_togle] = useState(false);
  const [res_message, setRes_message] = useState();
  return (
    <ShowError.Provider value={{ error_response, setError_response }}>
      <ShowSuccess.Provider value={{ success_response, setSuccess_response }}>
        <ModalTogle.Provider value={{ mod_togle, setMod_togle }}>
          <ResponseMessage.Provider value={{res_message,setRes_message}}>
            <BrowserRouter>
              <Routes>
                <Route path="/main_page" element={<LogIn />} />
                <Route path="/" element={<MainPage />} />
              </Routes>
            </BrowserRouter>
          </ResponseMessage.Provider>
        </ModalTogle.Provider>
      </ShowSuccess.Provider>
    </ShowError.Provider>
  );
}

export default App;
