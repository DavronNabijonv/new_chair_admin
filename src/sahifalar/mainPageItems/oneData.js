import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditModal from "../requestModals/editModal";
import Delete from "../requestModals/delete";

export default function OneData({card_data}) {
  const imageUrl = process.env.REACT_APP_IMAGE_BASE_URL;
    const [get_info,setGet_info] = useState();
    const [tog_edit,setTog_edit] = useState(false);
    const [tog_del,setTog_del] = useState(false);
    console.log('card data :', card_data)
    if(!card_data || card_data.length === 0){
        return <p>Malumot topilmadi....</p>
    }
  return (
      <div className="cards">
      {tog_edit&&<EditModal close_mod_func={()=>{setTog_edit(false)}} infos={get_info} />}
      {tog_del&&<Delete close_del_func={()=>{setTog_del(false)}} del_info={get_info}/>}
        <div className="img_edit_del">
          <img src={`${imageUrl}/upload/${card_data[0].photo}`} alt="mebel rasmi" />
          <div className="btns_grp">
            <button
              className="edit"
              onClick={() => {
                setTog_edit(true);
                setGet_info(card_data[0]);
              }}
            >
              <CiEdit />
            </button>
            <button
              className="delete"
              onClick={() => {
                setTog_del(true);
                setGet_info(card_data[0]);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
        <div className="img_info">
          <p className="txt">Nomi: {card_data[0].name}</p>
          <p className="txt">Uzunligi: {card_data[0].length}</p>
          <p className="txt">Kengligi: {card_data[0].breadth}</p>
          <p className="txt">Balandligi: {card_data[0].height}</p>
          <p className="txt">Material: {card_data[0].material}</p>
          <p className="txt">Og`irligi: {card_data[0].weight}</p>
          <p className="txt">Ramka rangi: {card_data[0].frame}</p>
          <p className="txt">Olinadigan qopqog`i: {card_data[0].cover}</p>
          <p className="txt">Optsiyasi: {card_data[0].option}</p>
          <p className="txt">Stul rangi: {card_data[0].color}</p>
          <p className="txt">Stul katlanishi: {card_data[0].folding}</p>
          <p className="txt">Yasalgan hudud: {card_data[0].region}</p>
          <p className="txt">Stul kategoriyasi: {card_data[0].category}</p>
          <p className="txt">Stul narxi: </p>
        </div>
      </div>
  );
}
