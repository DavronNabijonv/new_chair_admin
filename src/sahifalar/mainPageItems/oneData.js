import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditModal from "../requestModals/editModal";
import Delete from "../requestModals/delete";

export default function OneData({card_data}) {
    const [get_info,setGet_info] = useState();
    const [tog_edit,setTog_edit] = useState(false);
    const [tog_del,setTog_del] = useState(false);
    if(!card_data || card_data.length === 0){
        return <p>Malumot topilmadi....</p>
    }
  return (
      <div className="cards">
      {tog_edit&&<EditModal close_mod_func={()=>{setTog_edit(false)}} infos={get_info} />}
      {tog_del&&<Delete close_del_func={()=>{setTog_del(false)}} del_info={get_info}/>}
        <div className="img_edit_del">
          <img src={card_data.photo} alt="mebel rasmi" />
          <div className="btns_grp">
            <button
              className="edit"
              onClick={() => {
                setTog_edit(true);
                setGet_info(card_data);
              }}
            >
              <CiEdit />
            </button>
            <button
              className="delete"
              onClick={() => {
                setTog_del(true);
                setGet_info(card_data);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
        <div className="img_info">
          <p className="txt">Nomi: {card_data.name}</p>
          <p className="txt">Uzunligi: {card_data.length}</p>
          <p className="txt">Kengligi: {card_data.breadth}</p>
          <p className="txt">Balandligi: {card_data.height}</p>
          <p className="txt">Material: {card_data.material}</p>
          <p className="txt">Og`irligi: {card_data.weight}</p>
          <p className="txt">Ramka rangi: {card_data.frame}</p>
          <p className="txt">Olinadigan qopqog`i: {card_data.cover}</p>
          <p className="txt">Optsiyasi: {card_data.option}</p>
          <p className="txt">Stul rangi: {card_data.color}</p>
          <p className="txt">Stul katlanishi: {card_data.folding}</p>
          <p className="txt">Yasalgan hudud: {card_data.region}</p>
          <p className="txt">Stul kategoriyasi: {card_data.category}</p>
          <p className="txt">Stul narxi: </p>
        </div>
      </div>
  );
}
