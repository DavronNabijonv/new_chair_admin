import React, { useEffect, useState } from "react";
import "./allData.scss";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditModal from "../requestModals/editModal";
import Delete from "../requestModals/delete";

export default function AllData({ item_infos }) {

  const [get_info,setGet_info] = useState();
  const [tog_edit,setTog_edit] = useState(false);
  const [tog_del,setTog_del] = useState(false);
  

  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const imageUrl = process.env.REACT_APP_IMAGE_BASE_URL;

  useEffect(()=>{
    console.log(` api Linki: ${apiUrl}/products/${get_info}`);
  },[get_info])

  if (!item_infos || item_infos.length === 0) {
    return <p>No data available</p>; // Fallback if no items are available
  }

  return (
    <div className="all_data">
      {tog_edit&&<EditModal close_mod_func={()=>{setTog_edit(false)}} infos={get_info} />}
      {tog_del&&<Delete close_del_func={()=>{setTog_del(false)}} del_info={get_info}/>}
      {item_infos.map((r, index) => (
        <div key={index} className="cards">
          <div className='img_edit_del'>
            <img src={`${apiUrl}/upload/${r.photo}`} alt='mebel rasmi' />
            <div className='btns_grp'>
              <button className="edit" 
              onClick={()=>{setTog_edit(true);setGet_info(r)}}
              ><CiEdit /></button>
              <button className="delete" onClick={()=>{ setTog_del(true);setGet_info(r);}}><MdDelete /></button>
            </div>
          </div>
          <div className="img_info">
            <p className="txt">Nomi: {r.name}</p>
            <p className="txt">Uzunligi: {r.length}</p>
            <p className="txt">Kengligi: {r.breadth}</p>
            <p className="txt">Balandligi: {r.height}</p>
            <p className="txt">Stul oyoqlari: {r.material}</p>
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
