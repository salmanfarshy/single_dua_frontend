"use client";

import React, { useState } from "react";
import Catagory_list from "../components/Catagory_list";

function Page_compo_interact() {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <>
      <div
        className="lg:w-16 sm:w-11 h-10 rounded-sm sm:flex bg-customWhite flex flex-col justify-center items-center gap-1 sm:ms-5 lg:ms-2"
        role="button"
        onClick={() => setIsToggle(!isToggle)}
      >
        <div className="w-full h-1 bg-black"></div>
        <div className="w-full h-1 bg-black"></div>
        <div className="w-full h-1 bg-black"></div>
      </div>

      {isToggle && <Catagory_list />}
    </>
  );
}

export default Page_compo_interact;
