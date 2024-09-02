import React, { useEffect, useState,useContext } from "react";
import "./postModal.scss";
import { createFruniture } from "../../barcha_sorovlar/post/create_furniture";
import { ModalTogle } from "../../App";

export default function PostRequestModal() {

  const {setMod_togle} = useContext(ModalTogle)

    const [furnitureInfo,setFurnitureInfo] = useState({
        photo:'',
        length:'',
        breadth:'',
        height:'',
        material:'',
        weight:'',
        frame:'',
        cover:'',
        option:'',
        color:'',
        folding:'',
        region:'',
        category:'',
    })

    const handleChange = (e) => {
        setFurnitureInfo({...furnitureInfo,[e.target.name]:e.target.value})
    }

    const addFurniture = () =>{
        const response_request = createFruniture(furnitureInfo);
        if(response_request.statusCode === 401 || !response_request){

        }else{

        }
    }

  return (
    <div className="postModal">
      <h1>Yangi mebel yaratish</h1>
      <div className="mebel_info">
        <div className="input_grp">
          <label for="photo">Mebel Rasmini kiritng:</label>
          <input
            name="photo"
            type="file"
            placeholder="Stul rasmi"
            value={furnitureInfo.photo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input_grp">
          <label for="length">Uzunligi</label>
          <input
            name="length"
            type="text"
            value={furnitureInfo.length}
            onChange={handleChange}
            placeholder="Stul uzunligi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="breadth">Uzunligi</label>
          <input
            name="breadth"
            type="text"
            value={furnitureInfo.breadth}
            onChange={handleChange}
            placeholder="Stul kengligi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="height">Uzunligi</label>
          <input
            name="height"
            type="text"
            value={furnitureInfo.height}
            onChange={handleChange}
            placeholder="Stul balandlik"
            required
          />
        </div>
        <div className="input_grp">
          <label for="material">Uzunligi</label>
          <input
            name="material"
            type="text"
            value={furnitureInfo.material}
            onChange={handleChange}
            placeholder="Stul materiali"
            required
          />
        </div>
        <div className="input_grp">
          <label for="weight">Uzunligi</label>
          <input
            name="weight"
            type="text"
            value={furnitureInfo.weight}
            onChange={handleChange}
            placeholder="Stul ogirlig"
            required
          />
        </div>
        <div className="input_grp">
          <label for="frame">Uzunligi</label>
          <input
            name="frame"
            type="text"
            value={furnitureInfo.frame}
            onChange={handleChange}
            placeholder="Stul ramka_rangi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="cover">Uzunligi</label>
          <input
            name="cover"
            type="text"
            value={furnitureInfo.cover}
            onChange={handleChange}
            placeholder="Stul qopqogi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="option">Uzunligi</label>
          <input
            name="option"
            type="text"
            value={furnitureInfo.option}
            onChange={handleChange}
            placeholder="Stul optiyasi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="color">Uzunligi</label>
          <input
            name="color"
            type="text"
            value={furnitureInfo.color}
            onChange={handleChange}
            placeholder="Stul rangi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="folding">Uzunligi</label>
          <input
            name="folding"
            type="text"
            value={furnitureInfo.folding}
            onChange={handleChange}
            placeholder="Stul katlanishi"
            required
          />
        </div>
        <div className="input_grp">
          <label for="region">Ishlab chiqarilgan mamlakat:</label>
          <input
            name="region"
            type="text"
            value={furnitureInfo.region}
            placeholder="Stul yasalgan mamlakat"
            required
          />
        </div>
        <div className="input_grp">
          <label for="category">Mebel kategoriyasi</label>
          <input
            name="category"
            type="text"
            value={furnitureInfo.category}
            onChange={handleChange}
            placeholder="Stul kategoriyasi"
            required
          />
        </div>
      </div>
      <button >Yaratish</button>
    </div>
  );
}
