import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import styles from "./CreateCategory.module.scss";

import { useDispatch } from "react-redux";
import { addCategory, updateCategory } from "../../store/actions";

import { ChromePicker } from "react-color";
import ActionsButtonGroup from "../common/formControls/actionsButtonGroup/ActionsButtonGroup";
import NoteTextfield from "../common/formControls/noteTextfield/NoteTextfield";
import clsx from "clsx";

const CreateCategory = React.forwardRef((props, ref) => {
  const [title, setTitle] = useState(props.category.title || "");
  const [description, setDescription] = useState(
    props.category.description || ""
  );
  const [color, setColor] = useState(props.category.color || "#f88f01");

  const [isValidExpense, setIsValidExpense] = useState(false);

  const [isMoreInfoShown, setIsMoreInfoShown] = useState(
    Boolean(props.category.description)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsValidExpense(title);
  }, [title]);

  const createOnClick = (e) => {
    e.preventDefault();
    const newCategory = {
      title,
      description,
      color: color.hex,
    };
    if (props.isCreate) {
      dispatch(addCategory(newCategory));
    } else {
      dispatch(updateCategory({ ...newCategory, _id: props.category._id }));
    }
    props.afterAction();
  };

  return (
    <form className={styles.wrapper} autoComplete="off" ref={ref}>
      <div className={clsx(styles.gap, styles.colorPicker)}>
        <ChromePicker
          color={color}
          onChange={(newColor) => setColor(newColor)}
        />
      </div>
      <div
        style={{ display: isMoreInfoShown ? "" : "none" }}
        className={styles.moreInfo}
      >
        <NoteTextfield
          label="Description"
          value={description}
          setNote={setDescription}
          gapClassname={styles.gap}
        />
      </div>
      <ActionsButtonGroup
        cardType={"category"}
        onCreate={createOnClick}
        isCreateDisabled={!isValidExpense}
        isCreate={props.isCreate}
        isMoreInfoShown={isMoreInfoShown}
        setIsMoreInfoShown={setIsMoreInfoShown}
        buttonGroupClassname={styles.buttonGroup}
        close={props.close}
      />
    </form>
  );
});
CreateCategory.propTypes = {
  close: PropTypes.func.isRequired,
  afterAction: PropTypes.func,
  category: PropTypes.object,
  isCreate: PropTypes.bool,
};
CreateCategory.defaultProps = {
  category: {},
  isCreate: true,
  afterAction: () => {},
};

export default CreateCategory;
