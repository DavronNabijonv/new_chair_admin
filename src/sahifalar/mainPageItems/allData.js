import React, { useState } from "react";
import "./allData.scss";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditModal from "../requestModals/editModal";

export default function AllData({ item_infos }) {
  const [get_info,setGet_info] = useState();
  const [tog_edit,setTog_edit] = useState(false);
  const [tog_del,setTog_del] = useState(false);
  if (!item_infos || item_infos.length === 0) {
    return <p>No data available</p>; // Fallback if no items are available
  }

  return (
    <div className="all_data">
      {tog_edit&&<EditModal close_mod_func={()=>{setTog_edit(false)}} infos={get_info} />}
      {item_infos.map((r, index) => (
        <div key={index} className="cards">
          <div className='img_edit_del'>
            <img src={r.photo} alt='mebel rasmi' />
            <div className='btns_grp'>
              <button className="edit" 
              onClick={()=>{setTog_edit(true);setGet_info(r)}}
              ><CiEdit /></button>
              <button className="delete"><MdDelete /></button>
            </div>
          </div>
          <div className="img_info">
            <p className="txt">Nomi: {r.name}</p>
            <p className="txt">Uzunligi: {r.length}</p>
            <p className="txt">Kengligi: {r.breadth}</p>
            <p className="txt">Balandligi: {r.height}</p>
            <p className="txt">Material: {r.material}</p>
            <p className="txt">Og`irligi: {r.weight}</p>
            <p className="txt">Ramka rangi: {r.frame}</p>
            <p className="txt">Olinadigan qopqog`i: {r.cover}</p>
            <p className="txt">Optsiyasi: {r.option}</p>
            <p className="txt">Stul rangi: {r.color}</p>
            <p className="txt">Stul katlanishi: {r.folding}</p>
            <p className="txt">Yasalgan hudud: {r.region}</p>
            <p className="txt">Stul kategoriyasi: {r.category}</p>
            <p className="txt">Stul narxi: </p>
          </div>
        </div>
      ))}
    </div>
  );
}
