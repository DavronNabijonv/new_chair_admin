import React, { useContext, useEffect, useState } from "react";
import "./mainPage.scss";
import axios from "axios";
import AllData from "./mainPageItems/allData";
import PostRequestModal from "./requestModals/postRequestModal";
import { ModalTogle } from "../App";
import OneData from "./mainPageItems/oneData";
import { useQuery } from "@tanstack/react-query";

export default function MainPage() {
  const [get_id, setGet_id] = useState("");  // Initialize as an empty string
  const [info_id, setInfo_id] = useState([]);
  const [id_data, setId_data] = useState(false);
  const { mod_togle, setMod_togle } = useContext(ModalTogle);
  const [items, setItems] = useState([]);  // Renamed `item` to `items` for clarity
  const [totalPages, setTotalPages] = useState(0);  // Store the total number of pages
  const [currentPage, setCurrentPage] = useState(1);  // Track the current page
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  // Handle the input change event for filtering
  const handleId = (e) => {
    setGet_id(e.target.value);
  };

  // Filter data by `name`
  const filtered_data = (e) => {
    e.preventDefault();
    const filteredItems = items.filter((item) => item.name === get_id);
    setInfo_id(filteredItems);
    setId_data(true);
  };

  // Fetch paginated data from the backend
  const fetchDataPagination = async (page = 1) => {
    try {
      const { data } = await axios.get(`${apiUrl}/products?page=${page}`);

      // Calculate total pages only once
      setTotalPages(Math.ceil(data.total / 10));

      // Process and update the photo URLs
      const updatedProducts = data.products.map((product) => {
        const { photo } = product;
        const indexWord = photo.indexOf("fakepath");
        const indexUploadWord = photo.indexOf("upload");

        if (indexWord !== -1) {
          return { ...product, photo: photo.substring(indexWord + 9) };
        } else if (indexUploadWord !== -1) {
          return { ...product, photo: photo.substring(indexUploadWord + 7) };
        }
        return product; // Return product unchanged if no match
      });

      setItems(updatedProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // use react-query 
  const {isLoading} = useQuery(['get_data'],fetchDataPagination(currentPage));

  // Effect to fetch the first page of data when the component mounts
  useEffect(() => {
    fetchDataPagination(currentPage);
  }, [currentPage]);

  // Render pagination controls
  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return pages.map((page) => (
      <p
        key={page}
        onClick={() => setCurrentPage(page)} // Update current page when clicked
        className={page === currentPage ? "active_page" : ""}
      >
        {page}
      </p>
    ));
  };


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
        <button onClick={() => setId_data(false)} className="all_furniture">
          Barcha mebellar
        </button>
        <button
          className="new_furniture"
          onClick={() => setMod_togle(true)}
        >
          Yangi mebel yaratish
        </button>
        {mod_togle && <PostRequestModal />}
      </div>
      
      <div className="pagination_part">{renderPagination()}</div>
      
      <div className="data_body">
        {id_data ? (
          <OneData card_data={info_id} />
        ) : isLoading?'Ma`lumotlar yuklanmoqda...':(
          <AllData item_infos={items} />
        )}
      </div>
    </div>
  );
}
