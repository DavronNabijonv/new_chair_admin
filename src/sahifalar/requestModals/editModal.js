import React, { useContext, useState } from "react";
import "./postModal.scss";
import { patch_furniture } from "../../barcha_sorovlar/put_patch_del/patchFurniture";
import {
  GetAccessToken,
  ResponseMessage,
  ShowError,
  ShowSuccess,
} from "../../App";
import Error_res from "../suc_err/error";
import Success from "../suc_err/success";

export default function EditModal({ close_mod_func, infos }) {
  const { token } = useContext(GetAccessToken);
  const { setRes_message } = useContext(ResponseMessage);
  const { error_response, setError_response } = useContext(ShowError);
  const { success_response, setSuccess_response } = useContext(ShowSuccess);
  const [furnitureInfoEdit, setFurnitureInfoEdit] = useState({
    id: infos["_id"],
    photo: infos.photo,
    length: infos.length,
    breadth: infos.breadth,
    height: infos.height,
    material: infos.material,
    weight: infos.weight,
    frame: infos.frame,
    cover: infos.cover,
    option: infos.option,
    color: infos.color,
    folding: infos.folding,
    region: infos.region,
    category: infos.category,
  });

  const handleChangeEdit = (e) => {
    setFurnitureInfoEdit({
      ...furnitureInfoEdit,
      [e.target.name]: e.target.value,
    });
  };

  const remove_PopUp_edit = () => {
    setTimeout(() => {
      setError_response(false);
      setSuccess_response(false);
    }, 3000);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    const res = await patch_furniture(
      furnitureInfoEdit.id,
      furnitureInfoEdit,
      token
    );

    if (res.success) {
      console.log("salom", res.response);
      setSuccess_response(true);
      setRes_message("Furniture updated successfully!");
      remove_PopUp_edit();
    } else {
      console.log("salom", res.error.response.data.message);
      setError_response(true);
      setRes_message(res.error.response.data.message);
      remove_PopUp_edit();
    }
  };

  return (
    <div className="for_fixed">
      <div className="edit_modal_background">
        {error_response && (
          <div className="error_post">
            <Error_res />
          </div>
        )}
        {success_response && (
          <div className="success_post">
            <Success />
          </div>
        )}
        <div className="postModal">
          <button className="btn_close" onClick={close_mod_func}>
            Ortga
          </button>
          <h1>Ma`lumotlarni tahrirlash</h1>
          <form onSubmit={handleSubmitEdit} className="mebel_info">
            <div className="input_grp">
              <label htmlFor="id">Mahsulot ID:</label>
              <input
                name="id"
                type="text"
                placeholder="Mahsulot ID raqami"
                value={furnitureInfoEdit.id}
                onChange={handleChangeEdit}
                disabled
                required
              />
            </div>
            <div className="input_grp">
              <label htmlFor="photo">Mebel rasmini kiritng:</label>
              <input
                name="photo"
                type="file"
                onChange={(e) => {
                  setFurnitureInfoEdit({
                    ...furnitureInfoEdit,
                    photo: e.target.files[0], // Keep the file in state
                  });
                }}
                required
              />
            </div>

            <div className="input_grp">
              <label for="length">Uzunligi</label>
              <input
                name="length"
                type="text"
                value={furnitureInfoEdit.length}
                onChange={handleChangeEdit}
                placeholder="Stul uzunligi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="breadth">Kengligi:</label>
              <input
                name="breadth"
                type="text"
                value={furnitureInfoEdit.breadth}
                onChange={handleChangeEdit}
                placeholder="Stul kengligi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="height">Balandlik:</label>
              <input
                name="height"
                type="text"
                value={furnitureInfoEdit.height}
                onChange={handleChangeEdit}
                placeholder="Stul balandlik"
                required
              />
            </div>
            <div className="input_grp">
              <label for="material">Stul materiali:</label>
              <input
                name="material"
                type="text"
                value={furnitureInfoEdit.material}
                onChange={handleChangeEdit}
                placeholder="Stul materiali"
                required
              />
            </div>
            <div className="input_grp">
              <label for="weight">Og`irligi:</label>
              <input
                name="weight"
                type="text"
                value={furnitureInfoEdit.weight}
                onChange={handleChangeEdit}
                placeholder="Stul ogirlig"
                required
              />
            </div>
            <div className="input_grp">
              <label for="frame">Ramka rangi:</label>
              <input
                name="frame"
                type="text"
                value={furnitureInfoEdit.frame}
                onChange={handleChangeEdit}
                placeholder="Stul ramka_rangi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="cover">Stul qopqog`i:</label>
              <input
                name="cover"
                type="text"
                value={furnitureInfoEdit.cover}
                onChange={handleChangeEdit}
                placeholder="Stul qopqogi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="option">Stul optsiyasi:</label>
              <input
                name="option"
                type="text"
                value={furnitureInfoEdit.option}
                onChange={handleChangeEdit}
                placeholder="Stul optiyasi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="color">Rangi</label>
              <input
                name="color"
                type="text"
                value={furnitureInfoEdit.color}
                onChange={handleChangeEdit}
                placeholder="Stul rangi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="folding">Stul katlanishi:</label>
              <input
                name="folding"
                type="text"
                value={furnitureInfoEdit.folding}
                onChange={handleChangeEdit}
                placeholder="Stul katlanishi"
                required
              />
            </div>
            <div className="input_grp">
              <label for="region">Ishlab chiqarilgan mamlakat:</label>
              <input
                name="region"
                type="text"
                value={furnitureInfoEdit.region}
                onChange={handleChangeEdit}
                placeholder="Stul yasalgan mamlakat"
                required
              />
            </div>
            <div className="input_grp">
              <label for="category">Mebel kategoriyasi</label>
              <input
                name="category"
                type="text"
                value={furnitureInfoEdit.category}
                onChange={handleChangeEdit}
                placeholder="Stul kategoriyasi"
                required
              />
            </div>
            <button type="submit" className="create_btn">
              Yangilash
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
