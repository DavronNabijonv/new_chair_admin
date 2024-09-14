import React, { useContext, useEffect, useState } from "react";
import "./mainPage.scss";
import axios from "axios";
import AllData from "./mainPageItems/allData";
import PostRequestModal from "./requestModals/postRequestModal";
import { ModalTogle } from "../App";
import OneData from "./mainPageItems/oneData";

export default function MainPage() {
  const [get_id, setGet_id] = useState();
  const [info_id, setInfo_id] = useState();
  const [id_data, setId_data] = useState(false);
  const { mod_togle, setMod_togle } = useContext(ModalTogle);
  const [item, setItem] = useState([]); // Initialize as an empty array

  const handleId = async (e) => {
    setGet_id(e.target.value);
  };

  const filtered_data = (e) => {
    e.preventDefault();
    setId_data(true); // This assumes you have a state to handle the filtering status

    const id_response = item.filter((it) => it.name === get_id); // Filtering items based on the `name` property

    if (id_response.length > 0) {
      // Check if there are any matching items
      setInfo_id(id_response); // Set the filtered data in the state
    } else {
      // Optional: Handle the case where no matching items are found
      setInfo_id([]); // or any fallback behavior
    }
  };

  useEffect(() => {
    // get information of products
    async function fetchData() {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      try {
        const url = `${apiUrl}/products`;

        await axios.get(url).then((res) => {
          let phot_url = res.data.products[0].photo;
          let index_word = phot_url.indexOf("upload");
          let secons_url = phot_url.substring(index_word + 7);
          res.data.products[0].photo = secons_url;
          console.log(res.data.products);
          setItem(res.data.products);
        });
      } catch (error) {
        console.error("Failed to fetch furniture data:", error);
      }
    }

    fetchData(); // Call the async function to fetch data
  }, []);

  return (
    <div className="mainPage">
      <div className="grp">
        <form onSubmit={filtered_data} className="search">
          <input
            type="text"
            value={get_id}
            onChange={handleId}
            placeholder="Mebel ID raqami"
          />
          <button type="submit">Search</button>
        </form>
        <button
          onClick={() => {
            setId_data(false);
          }}
          className="all_furniture"
        >
          Barcha mebellar
        </button>
        <button
          className="new_furniture"
          onClick={() => {
            setMod_togle(true);
          }}
        >
          Yangi mebel yaratish
        </button>
        {mod_togle && <PostRequestModal />}
      </div>
      <div className="data_body">
        {id_data ? (
          <OneData card_data={info_id} />
        ) : (
          <AllData item_infos={item} />
        )}
      </div>
    </div>
  );
}
