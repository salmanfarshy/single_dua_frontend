import React, { useState, useContext, useEffect } from "react";
import CategoryContext from "@/app/context/Category_context";
import axios from "axios";

function SubCateDuas_list({ subcat_id }) {
  const { subCategoryNo } = useContext(CategoryContext);

  const [duasData, setDuasData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://single-dua-backend.onrender.com/subCateDuas/${subcat_id}`
        );

        setDuasData(response.data);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ul className="mt-3">
        {subcat_id === subCategoryNo &&
          duasData.map(
            (dua) =>
              dua.dua_name_en !== null && (
                <li className="mt-4 me-2 ">
                  <a href={`#${dua.dua_name_en}`}>
                    <p className="text-sm line-clamp-1 select-none pointer-events-none">
                      &gt; {dua.dua_name_en}
                    </p>
                  </a>
                </li>
              )
          )}
      </ul>
    </>
  );
}

export default SubCateDuas_list;
