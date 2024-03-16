"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CategoryContext from "@/app/context/Category_context";
import Indivisual_dua from "./Indivisual_dua";

function Duas_list() {
  const { categoryNo } = useContext(CategoryContext);
  const [duasData, setDuasData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://single-dua-backend.onrender.com/CategoryDuas/${categoryNo}`
        );
        setDuasData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, [categoryNo]);

  if (isLoading)
    return (
      <div className="w-full h-[36rem] ms-5 me-36 mt-2 rounded-t-xl rounded-b-md overflow-y-auto overflow-x-hidden flex justify-center items-center">
        <div className="text-[4rem] font-bold text-green-800 select-none">
          Loading...
        </div>
      </div>
    );

  return (
    <div className="w-full h-[36rem] ms-5 lg:me-32 mt-2 rounded-t-xl rounded-b-md overflow-y-auto overflow-x-hidden z-10">
      {duasData &&
        duasData.map((dua) => <Indivisual_dua key={dua.id} dua={dua} />)}
    </div>
  );
}

export default Duas_list;
