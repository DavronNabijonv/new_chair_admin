import React, { useEffect, useState } from "react";
import "./mainPage.scss";
import AllData from "./mainPageItems/allData";
import PostRequestModal from "./mainPageItems/postRequestModal";

export default function MainPage() {
  const [modalTog,setModalTog] = useState();
  const [item,setItem] = useState();

  useEffect(()=>{
    const data_items =  AllData();
    setItem(data_items)
  },[])

  return <div className="mainPage">
    <div className="grp">
      <div className="search">
        <input type="number" placeholder="Mebel ID raqami" />
        <button>Search</button>
      </div>
      <button className="new_furniture">Yangi mebel yaratish</button>
      {modalTog&&<PostRequestModal  />}
    </div>
    <div className="data_body">
      <AllData item_infos={item} />
    </div>
  </div>;
}
