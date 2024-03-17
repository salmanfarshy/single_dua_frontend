"use client";
import React, { useState, useContext } from "react";
import CategoryContext from "@/app/context/Category_context";
import Image from "next/image";

import Sub_categorys from "./Sub_categorys";

function Catagory_box({ catagory }) {
  const { categoryNo, setCategoryNo, setSubCategoryNo } =
    useContext(CategoryContext);

  return (
    <div className="w-72 rounded-md mt-4">
      <div
        role="button"
        className="flex gap-3 cursor-pointer bg-lightPurple p-2 relative"
        onClick={() => {
          setCategoryNo(catagory.cat_id);
          setSubCategoryNo(null);
        }}
      >
        <div className="select-none pointer-events-none bg-customWhite h-12 w-12 ms-1 rounded-md flex justify-center items-center">
          <Image
            src={`/images/${catagory.cat_icon}.svg`}
            alt="Description of the image"
            width={38}
            height={18}
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <p className=" text-md text-green-800 font-semibold select-none pointer-events-none">
            {catagory.cat_name_en}
          </p>
          <p className="text-sm -tracking-tighte text-neutral-500 select-none pointer-events-none">
            Subcategory: {catagory.no_of_subcat}
          </p>
        </div>
        <div className=" absolute flex flex-col w-3 me-5 right-0 justify-center items-center text-green-900">
          <p className=" font-semibold select-none pointer-events-none">
            {catagory.no_of_dua}
          </p>
          <p className="text-sm select-none pointer-events-none">
            {catagory.no_of_dua === 1 ? "Dua" : "Duas"}
          </p>
        </div>
      </div>
      <ul className="list-disc text-green-700 ms-12 mt-2">
        {categoryNo === catagory.cat_id && (
          <Sub_categorys key={catagory.cat_id} cat_id={catagory.cat_id} />
        )}
      </ul>
    </div>
  );
}

export default Catagory_box;
