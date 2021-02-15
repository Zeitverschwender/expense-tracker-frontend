import React from "react";
import CategoryCardsContainer from "../../components/CategoryCardsContainer/CategoryCardsContainer";

import styles from "./Categories.module.scss";

const Categories = (props) => {
  return (
    <section className={styles.categoriesCardsContainer}>
      <CategoryCardsContainer></CategoryCardsContainer>
    </section>
  );
};

export default Categories;
