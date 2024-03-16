"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import Catagory_box from "./Catagory_box";

function Catagory_list() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://single-dua-backend.onrender.com/catagorys"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="flex flex-col items-center bg-customWhite h-[36rem] min-w-80 ms-5 mt-2 rounded-t-xl rounded-b-lg overflow-hidden">
        <div className="w-full bg-customGreen justify-center items-center min-h-14 flex flex-row px-5">
          <p className="text-base font-semibold text-white mx-auto">
            Categories
          </p>
        </div>
        <div className="mx-3 border-[1px] border-green-700 rounded-md w-72 mt-3 mb-2">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              id="filerted_catList"
              className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-green-700 focus:ring-green-700 focus:ring-1  
              sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
              placeholder="Search Categories"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="mt-32 overflow-y-auto overflow-x-hidden flex justify-center">
          <div className="text-3xl font-bold text-green-800 select-none">
            Loading...
          </div>
        </div>
      </div>
    );

  return (
    <div className=" sm:absolute lg:relative z-20 flex flex-col items-center lg:flex bg-customWhite h-[36rem] min-w-80 sm:ms-5 lg:ms-0 lg:mt-2 sm:mt-14 rounded-t-xl rounded-b-lg overflow-hidden">
      <div className="w-full bg-customGreen justify-center items-center min-h-14 flex flex-row px-5">
        <p className="text-base font-semibold text-white mx-auto">Categories</p>
      </div>
      <div className="mx-3 border-[1px] border-green-700 rounded-md w-72 mt-3 mb-2">
        <label className="relative block w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            id="filerted_catList"
            className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-green-700 focus:ring-green-700 focus:ring-1  
        sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4] select-none"
            placeholder="Search Categories"
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="mb-8 overflow-y-auto overflow-x-hidden">
        {!!data &&
          data.map((catagory) => (
            <Catagory_box key={catagory.cat_id} catagory={catagory} />
          ))}
      </div>
    </div>
  );
}

export default Catagory_list;
