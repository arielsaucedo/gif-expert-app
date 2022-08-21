import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Beatles"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid category={category} key={category} />;
      })}
    </>
  );
};
