import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./categoryCard/CategoryCard";
import * as actions from "../../store/actions/index";
import styles from "./CategoryCardsContainer.module.scss";


const CategoryCardsContainer = (props) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => Object.values(state.categories.categories));
  const hasError = useSelector((state) => state.categories.hasError);
  const error = useSelector((state) => state.categories.error);
  const errorDescription = useSelector(
    (state) => state.categories.errorDescription
  );

  const ongetAllCategories = useCallback(
    () => dispatch(actions.getAllCategories()),
    []
  );
  useEffect(() => {
    ongetAllCategories();
  }, [ongetAllCategories]);

  const categoryCards = categories.map((cat) => (
    <CategoryCard key={cat._id} category={cat}></CategoryCard>
  ));
  return (
    <div className={styles.categoriesCardsList}>
      
      {categoryCards}
    </div>
  );
};

export default CategoryCardsContainer;
