import React, { useContext, useEffect, useState } from "react";
import "./mainPage.scss";
import AllData from "./mainPageItems/allData";
import PostRequestModal from "./mainPageItems/postRequestModal";
import { ModalTogle } from "../App";

export default function MainPage() {
  const {mod_togle,setMod_togle} = useContext(ModalTogle)
  const [item, setItem] = useState();

  useEffect(() => {
    const data_items = AllData();
    setItem(data_items);
  }, []);

  return (
    <div className="mainPage">

      <div className="grp">
        <div className="search">
          <input type="number" placeholder="Mebel ID raqami" />
          <button>Search</button>
        </div>
        <button className="new_furniture" onClick={()=>{setMod_togle(true)}}>Yangi mebel yaratish</button>
        {mod_togle && <PostRequestModal />}
      </div>
      {/* <div className="data_body">
        <AllData  />
      </div> */}
    </div>
  );
}
