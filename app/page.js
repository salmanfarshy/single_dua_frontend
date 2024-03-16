import React from "react";
import Duas_list from "./components/Duas_list";
import Page_compo_interact from "./utilize_static_content/Page_compo_interact";
import { ContextProvider } from "@/app/context/Category_context";

export default function Home() {
  return (
    <div className=" sm:relative flex lg:flex-row sm:flex-col lg:gap-2 sm:gap-2 ">
      <ContextProvider>
        <Page_compo_interact />
        <Duas_list />
      </ContextProvider>
    </div>
  );
}
