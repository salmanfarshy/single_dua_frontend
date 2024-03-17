"use client";

import React, { useState } from "react";
import Audio_player from "./Audio_player";
import Image from "next/image";

function Indivisual_dua({ dua }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${dua.id}. ${dua.dua_name_en} ${dua.top_en} ${dua.dua_arabic} Transliteration: ${dua.transliteration_en} Translation: ${dua.translation_en} ${dua.bottom_en} Reference: ${dua.refference_en}`
      );
      alert("Text copied");
    } catch (error) {
      console.error("Failed to copy text: ", error);
      alert("Failed to copy text!");
    }
  };

  return (
    <>
      <div
        id={dua.dua_name_en}
        className="w-full bg-customWhite rounded-xl min-h-20 mt-5 p-6"
      >
        <div className="flex gap-3 items-center">
          <Image src="/images/duacard.svg" alt="" width={30} height={10} />

          <p className="text-green-700 font-semibold text-lg">
            {dua.id + ". " + dua.dua_name_en}
          </p>
        </div>
        {dua.top_en && (
          <p className=" mt-5 mb-10 text-xl font-semibold text-green-800">
            {dua.top_en}
          </p>
        )}
        {dua.dua_arabic && (
          <p className=" text-right mt-5 mb-10 text-3xl font-normal">
            {dua.dua_arabic}
          </p>
        )}
        {dua.transliteration_en && (
          <p className="mt-5 mb-5 text-xl font-semibold text-green-800">
            <p className="italic inline-block">
              <span className=" text-gray-900">Transliteration:</span>{" "}
              {dua.transliteration_en}
            </p>
          </p>
        )}
        {dua.translation_en && (
          <p className="mt-5 mb-5 text-xl font-semibold text-green-800">
            <p className=" inline-block">
              <span className=" text-gray-900">Translation:</span>{" "}
              {dua.translation_en}
            </p>
          </p>
        )}

        {dua.bottom_en && (
          <p className="mt-5 mb-5 text-xl font-semibold text-green-800">
            <p className="">{dua.bottom_en}</p>
          </p>
        )}

        {dua.refference_en && (
          <p className="mt-5 mb-5 text-xl font-semibold">
            <p className="text-green-600">Reference:</p>
            <p className="text-green-800">{dua.refference_en}</p>
          </p>
        )}

        <div className="mt-10 flex justify-between">
          {dua.audio ? (
            <div className="flex gap-5 items-center select-none">
              <div role="button" onClick={() => setIsAudioPlaying(true)}>
                <Image
                  src="/images/audiobtn.svg"
                  alt=""
                  width={45}
                  height={10}
                />
              </div>
              {isAudioPlaying && <Audio_player url={dua.audio} />}
            </div>
          ) : (
            <div className=" font-medium text-xl">No audio</div>
          )}
          <div className="flex justify-center items-center gap-14">
            <div className="select-none" role="button" onClick={handleCopy}>
              {" "}
              <Image src="/images/copy.svg" alt="" width={25} height={10} />
            </div>
            <div className="select-none" role="button">
              {" "}
              <Image src="/images/bookmark.svg" alt="" width={20} height={10} />
            </div>
            <div className="select-none" role="button">
              {" "}
              <Image src="/images/plan.svg" alt="" width={20} height={10} />
            </div>
            <div className="select-none" role="button">
              {" "}
              <Image src="/images/share.svg" alt="" width={20} height={10} />
            </div>
            <div className="select-none" role="button">
              {" "}
              <Image src="/images/report.svg" alt="" width={20} height={10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Indivisual_dua;
