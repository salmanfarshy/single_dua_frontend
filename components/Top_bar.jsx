import React from "react";

function Top_bar() {
  return (
    <div className="mt-6 w-screen h-16 flex sm:flex-col lg:flex-row lg:justify-normal sm:justify-between items-center sm:gap-4 lg:gap-0 sm:pb-4 lg:pb-0">
      <p className="ms-12 text-2xl font-bold text-zinc-600">Duas Page</p>
      <div
        className=" relative flex items-center border-green-700 border-[1px] lg:ms-[32rem]
      sm:ms-12 rounded-md h-12 w-80 bg-customWhite lg:overflow-hidden"
      >
        <input
          placeholder="Search by Dua Name"
          className=" h-full w-64 outline-none p-3 select-none"
          type="text"
          minLength="4"
          maxLength="50"
        />
        <div className=" absolute bg-lightPurple h-10 w-11 me-1 right-0 rounded-md flex justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center ms-[6rem]">
        <img
          src="/images/profile.svg"
          alt="home image"
          className="border-green-500 border-[1px] rounded-full select-none pointer-events-none"
        />
        <svg
          className="ml-2 mr-2 "
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
            fill="#868686"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Top_bar;
