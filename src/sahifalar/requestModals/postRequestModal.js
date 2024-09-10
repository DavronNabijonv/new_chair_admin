import React, { useEffect, useState, useContext, useCallback } from "react";
import "./postModal.scss";
import { createFruniture } from "../../barcha_sorovlar/post/create_furniture";
import { GetAccessToken, ModalTogle, ResponseMessage, ShowError, ShowSuccess } from "../../App";
import Success from "../suc_err/success";
import Error_res from "../suc_err/error";

export default function PostRequestModal() {
  const { setMod_togle } = useContext(ModalTogle);
  const { setRes_message } = useContext(ResponseMessage);
  const { error_response, setError_response } = useContext(ShowError);
  const { success_response, setSuccess_response } = useContext(ShowSuccess);
  const {token} = useContext(GetAccessToken);

  const [furnitureInfo, setFurnitureInfo] = useState({
    photo: "",
    length: "",
    breadth: "",
    height: "",
    material: "",
    weight: "",
    frame: "",
    cover: "",
    option: "",
    color: "",
    folding: "",
    region: "",
    category: "",
  });

  const handleChange = (e) => {
    setFurnitureInfo({ ...furnitureInfo, [e.target.name]: e.target.value });
  };

  const remove_PopUP_post = useCallback(() => {
    setTimeout(() => {
      setError_response(false);
      setSuccess_response(false);
    }, 3000);
  }, []);

  const addFurniture = async () => {
    const res_request = await createFruniture(furnitureInfo,token); // Use await
    console.log(res_request)
    if(res_request.success){
      setRes_message('Malumot saqlandi!!!');
      setSuccess_response(true);
      remove_PopUP_post();
    }else{
      setRes_message(res_request.request.data.message)
      setError_response(true)
      remove_PopUP_post();
    }

  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    addFurniture(); // Manually call the function to add furniture
  };

  return (
    <div
      className="modal_background"
    >
      {error_response && <div className="error_post"><Error_res /></div>}
      {success_response && <div className="success_post"><Success /></div>}
      <div className="postModal">
        <button
          className="btn_close"
          onClick={() => {
            setMod_togle(false);
          }}
        >
          Ortga
        </button>
        <h1>Yangi mebel yaratish</h1>
        <form onSubmit={handleSubmit} className="mebel_info">
          <div className="input_grp">
            <label htmlFor="photo">Mebel rasmini kiritng:</label>
            <input
              name="photo"
              type="file"
              value={furnitureInfo.photo}
              onChange={handleChange}
              required
            />
          </div>
          {/* Repeat the above for all inputs */}
          <div className="input_grp">
            <label for="length">Uzunligi:</label>
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
            <label for="breadth">Kengligi:</label>
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
            <label for="height">Balandlik:</label>
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
              <label htmlFor="material">Stul materiali:</label>
              <select 
              name="material" // Make sure this matches your state property name
              value={furnitureInfo.material} // Bind the value from state
              onChange={handleChange} // Handle the change event
              required
              >
                  <option value="">Tanlang</option> {/* Add a default placeholder */}
                  <option value="Yog`och">Yog`och</option>
                  <option value="Metal">Metal</option>
                  <option value="Nerjaveyka">Nerjaveyka</option>
                  <option value="Plastik">Plastik</option>
              </select>
          </div>
          <div className="input_grp">
            <label for="frame">Stul oyoqlari rangi:</label>
            <input
              name="frame"
              type="text"
              value={furnitureInfo.frame}
              onChange={handleChange}
              placeholder="Stul ramka_rangi"
              required
            />
            {/* <label for="frame">Ramka rangi:</label>
            <input
              name="frame"
              type="text"
              value={furnitureInfo.frame}
              onChange={handleChange}
              placeholder="Stul ramka_rangi"
              required
            /> */}
          </div>
          <div className="input_grp">
            <label for="cover">Stul o`rindig`i:</label>
            <input
              name="cover"
              type="text"
              value={furnitureInfo.cover}
              onChange={handleChange}
              placeholder="Stul o`rindig`i"
              required
            />
            {/* <input
              name="cover"
              type="text"
              value={furnitureInfo.cover}
              onChange={handleChange}
              placeholder="Stul qopqogi"
              required
            /> */}
          </div>
          <div className="input_grp">
            <label for="option">Stul oyoqlari:</label>
            <select 
            name="option"
            value={furnitureInfo.option}
            onChange={handleChange}
            required
            >
              <option value={''}>Tanlang</option>
              <option value="Yog`och">Yog`och</option>
              <option value="Metal">Metal</option>
              <option value="Nerjaveyka">Nerjaveyka</option>
              <option value="Plastik">Plastik</option>
            </select>
            {/* <input
              name="option"
              type="text"
              value={furnitureInfo.option}
              onChange={handleChange}
              placeholder="Stul optiyasi"
              required
            /> */}
          </div>
          <div className="input_grp">
            <label for="color">Stul o`rindig`i rangi:</label>
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
            <label for="folding">Stul o`rindiq rangi:</label>
            <input
              name="folding"
              type="text"
              value={furnitureInfo.folding}
              onChange={handleChange}
              placeholder="Stul o`rindiq rangi"
              required
            />
            {/* <input
              name="folding"
              type="text"
              value={furnitureInfo.folding}
              onChange={handleChange}
              placeholder="Stul katlanishi"
              required
            /> */}
          </div>
          <div className="input_grp">
            <label for="region">Ishlab chiqarilgan mamlakat:</label>
            <input
              name="region"
              type="text"
              value={furnitureInfo.region}
              onChange={handleChange}
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
          <button type="submit" className="create_btn">
            Yaratish
          </button>
        </form>
      </div>
    </div>
  );
}
