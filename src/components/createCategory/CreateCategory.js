import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import styles from "./CreateCategory.module.scss";

import { useDispatch } from "react-redux";
import { addCategory, updateCategory } from "../../store/actions";

import ActionsButtonGroup from "../common/formControls/actionsButtonGroup/ActionsButtonGroup";

const CreateCategory = React.forwardRef((props, ref) => {
  const [title, setTitle] = useState(props.category.title || "");
  const [description, setDescription] = useState(
    props.category.description || ""
  );
  const [color, setColor] = useState(props.category.color || "");

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
      color,
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
      content
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
