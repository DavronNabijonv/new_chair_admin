import React, { useContext, useEffect, useState } from "react";
import "./mainPage.scss";
import axios from "axios";
import AllData from "./mainPageItems/allData";
import PostRequestModal from "./requestModals/postRequestModal";
import { ModalTogle } from "../App";

export default function MainPage() {
  const { mod_togle, setMod_togle } = useContext(ModalTogle);
  const [item, setItem] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // get information of products
    async function fetchData() {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      try {
        const url = `${apiUrl}/products`;

        await axios.get(url).then((res) => {
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
        <div className="search">
          <input type="number" placeholder="Mebel ID raqami" />
          <button>Search</button>
        </div>
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
        <AllData item_infos={item} /> {/* This will now always be an array */}
      </div>
    </div>
  );
}
