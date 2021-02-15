import React, { useState } from "react";
import styles from "./CategoryCard.module.scss";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";
import clsx from "clsx";
import CardOptions from "../../common/cardOptions/CardOptions";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../../store/actions";
import CardNote from "../../common/cardNote/CardNote";

const setTitleColor = (color) => {
  const c = color.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    return luma < 50 ? '#eee' : '#000';
};
const CategoryCard = (props) => {
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const colorStyle = {
    backgroundColor: props.category.color,
    color: setTitleColor(props.category.color),
  };
  return (
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
        onEditClick={() => alert("editing")}
        onDeletecCick={() => dispatch(removeCategory(props.category._id))}
        isShown={clicked}
      />
      <CardNote note={props.category.description} isShown={clicked} />
    </div>
  );
};

CategoryCard.propTypes = {};
export default CategoryCard;
