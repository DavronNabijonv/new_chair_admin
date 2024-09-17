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
  const [item, setItem] = useState(); // Initialize as an empty array

  const handleId = async (e) => {
    setGet_id(e.target.value);
  };

  const filtered_data = (e) => {
    e.preventDefault();
    setId_data(true); // This assumes you have a state to handle the filtering status

    const id_response = item.filter((it) => it.name == get_id); // Filtering items based on the `name` property

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
      try {
        const { data } = await axios.get('http://85.159.231.67:4000/v1/api/products');
        console.log(data)
        data.products.forEach((product, index) => {
            let photo_url = product.photo;
            
            // Find the position of 'upload' in the URL
            let index_word = photo_url.indexOf('fakepath');
            let index_upload_word = photo_url.indexOf('upload');
            
            // Ensure 'upload' exists in the URL before modifying it
            if (index_word !== -1) {
                // Extract the part of the URL after 'upload/'
                let second_url = photo_url.substring(index_word + 9);
                
                // Update the photo URL with the new value
                data.products[index].photo = second_url;
    
            }else if(index_upload_word !== -1){
                 // Extract the part of the URL after 'upload/'
                 let second_url = photo_url.substring(index_upload_word + 7);
                
                 // Update the photo URL with the new value
                 data.products[index].photo = second_url;
                
            }
        });
          setItem(data.products);
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
            placeholder="Mebel nomi"
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
