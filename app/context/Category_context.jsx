"use client";

import { createContext, useState } from "react";
const CategoryContext = createContext();

export const ContextProvider = ({ children }) => {
  const [categoryNo, setCategoryNo] = useState(1);
  const [subCategoryNo, setSubCategoryNo] = useState(null);

  return (
    <CategoryContext.Provider
      value={{ categoryNo, subCategoryNo, setCategoryNo, setSubCategoryNo }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
