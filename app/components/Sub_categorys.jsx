"use client";

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CategoryContext from "@/app/context/Category_context";
import SubCateDuas_list from "./SubCateDuas_list";

function Sub_categorys({ cat_id }) {
  const { categoryNo, setSubCategoryNo } = useContext(CategoryContext);

  const [subData, setSubData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://single-dua-backend.onrender.com/sub_catagorys/${cat_id}`
        );
        setSubData(response.data);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {cat_id === categoryNo &&
        subData.map((sub_catagory) => (
          <li
            key={sub_catagory.subcat_id}
            className="mt-4 "
            role="button"
            onClick={() => setSubCategoryNo(sub_catagory.subcat_id)}
          >
            <p className="text-sm font-medium select-none pointer-events-none">
              {sub_catagory.subcat_name_en}
            </p>
            <SubCateDuas_list subcat_id={sub_catagory.subcat_id} />
          </li>
        ))}
    </>
  );
}

export default Sub_categorys;
