import React, { useState } from "react";
import CategoryCardsContainer from "../../components/CategoryCardsContainer/CategoryCardsContainer";
import CategoriesHeader from "../../components/CategoryCardsContainer/categoriesHeader/CategoriesHeader";

import styles from "./Categories.module.scss";
import CreateCategory from "../../components/createCategory/CreateCategory";

const Categories = (props) => {
  const [isCreateShown, setIsCreateShown] = useState(false);

  const hideCreate = (e) => {
    e.preventDefault();

    setIsCreateShown(false);
  };
  return (
    <section className={styles.categoriesCardsContainer}>
      <CategoriesHeader showCreate={() => setIsCreateShown(true)} />
      {isCreateShown && (
        <CreateCategory
          afterAction={() => setIsCreateShown(false)}
          close={hideCreate}
        />
      )}
      <CategoryCardsContainer></CategoryCardsContainer>
    </section>
  );
};

export default Categories;
