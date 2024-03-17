import React from "react";
import Image from "next/image";

function Mini_icon({ url }) {
  return (
    <div className=" bg-lightPurple flex p-2 rounded-full items-center h-10 w-10 justify-center lg:mx-auto sm:my-auto cursor-pointer mb-5 select-none">
      <Image src={url} alt="" width={18} height={5} />
    </div>
  );
}

export default Mini_icon;
