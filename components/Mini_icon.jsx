import React from "react";

function Mini_icon({ url }) {
  return (
    <div className=" bg-lightPurple flex p-2 rounded-full items-center h-10 w-10 justify-center lg:mx-auto sm:my-auto cursor-pointer mb-5 select-none">
      <img src={url} alt="" />
    </div>
  );
}

export default Mini_icon;
