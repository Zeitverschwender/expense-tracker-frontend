import React, { useState } from "react";
import styles from "./CategoryCard.module.scss";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";
import clsx from "clsx";
import CardOptions from "../../common/cardOptions/CardOptions";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../../store/actions";
import CardNote from "../../common/cardNote/CardNote";
import CreateCategory from "../../createCategory/CreateCategory";
import getTitleColor from "../../../utils/getTitleColor"

const CategoryCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  const colorStyle = {
    backgroundColor: props.category.color,
    color: getTitleColor(props.category.color),
  };
  return editing ? (
    <CreateCategory
      close={() => setEditing(false)}
      category={props.category}
      afterAction={() => setEditing(false)}
      isCreate={false}
    />
  ) : (
    <div
      className={clsx(
        styles.card,
        !clicked ? styles.cardHover : styles.clicked
      )}
    >
      <div className={styles.cardContent} onClick={() => setClicked(!clicked)}>
        <div style={colorStyle} className={styles.title}>
          {props.category.title}
        </div>
        {props.category.description && <SubjectSharpIcon />}
      </div>
      <CardOptions
        cardType="category"
        onEditClick={() => setEditing(true)}
        onDeletecCick={() => dispatch(removeCategory(props.category._id))}
        isShown={clicked}
      />
      <CardNote note={props.category.description} isShown={clicked} />
    </div>
  );
};

CategoryCard.propTypes = {};
export default CategoryCard;
