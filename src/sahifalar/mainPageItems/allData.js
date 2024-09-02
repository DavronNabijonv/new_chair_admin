import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export default function AllData({item_infos}) {
  return (
    <div className='all_data'>
        {item_infos.map((r,index)=>(
            <div key={index}>
                <div className='img_edit_del'>
                    <img src='' alt='mebel rasmi' />
                    <div className='btns_grp'>
                        <button><CiEdit /></button>
                        <button><MdDelete /></button>
                        <button>Batafsil</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
