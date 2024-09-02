import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./sahifalar/logIn";
import MainPage from "./sahifalar/mainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main_page" element={<LogIn/>}/>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
