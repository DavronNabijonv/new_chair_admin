import React, { useContext, useEffect } from 'react'
import './postModal.scss'
import { GetAccessToken, ResponseMessage, ShowError, ShowSuccess } from '../../App'
import Error_res from '../suc_err/error';
import Success from '../suc_err/success';
import { delete_furniture } from '../../barcha_sorovlar/put_patch_del/deleteFurniture';

export default function Delete({del_info,close_del_func}) {
    const {error_response,setError_response} = useContext(ShowError);
    const {success_response,setSuccess_response} = useContext(ShowSuccess);
    const {token} = useContext(GetAccessToken)
    const {setRes_message} = useContext(ResponseMessage);

    const remove_PopUp_edit = () =>{
      setTimeout(() => {
          setError_response(false);
          setSuccess_response(false);
      }, 3000);
    }

    const deleteButton = async () =>{
        const res = await delete_furniture(del_info["_id"], token);
      
        if (res.success) {
          console.log('salom',res.response);
          setSuccess_response(true);
          setRes_message("Furniture delete successfully!");
          remove_PopUp_edit();
        } else {
          console.log('salom',res.error.response.data.message);
          setError_response(true);
          setRes_message(res.error.response.data.message);
          remove_PopUp_edit();
        }
    }

  return (
        <div className='del_modal_background'>
        {error_response&&<div className='error_post'><Error_res/></div>}
        {success_response&& <div className='success_post'><Success/></div>}
      <div className="postModal">
        <button
          className="btn_close"
          onClick={close_del_func}
        >
          Ortga
        </button>
        <h1>Ma`lumotni o`chirish</h1>
        <div className='del_card'>
            <img src={del_info.photo} alt='o`chiriluvchi mahsulot' />
            <div className='del_item_txt'>
                <p>Mahsulot IDsi: <span>{del_info["_id"]}</span></p>
                <p>Mahsulot nomi: <span>{del_info.name}</span></p>
            </div>
        </div>
          <button onClick={deleteButton} className="create_btn" >
            O`chirish`
          </button>
      </div>
    </div>
  )
}
