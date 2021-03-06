import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import styles from "./CreateExpense.module.scss";
import PaymentMethod from "../../models/PaymentType";

import AmountTextfield from "./formControls/amountTextfield/AmountTextfield";
import DatePicker from "./formControls/datePicker/DatePicker";
import PaymentMethodRadio from "./formControls/paymentMethodRadio/PaymentMethodRadio";
import CategorySelect from "./formControls/categorySelect/CategorySelect";
import MiniInfo from "./miniInfo/MiniInfo";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../../store/actions";
import ActionsButtonGroup from "../common/formControls/actionsButtonGroup/ActionsButtonGroup";
import NoteTextfield from "../common/formControls/noteTextfield/NoteTextfield";

const CreateExpense = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(
    props.expense.date ? new Date(props.expense.date) : new Date()
  );
  const [amount, setAmount] = useState(props.expense.amount || "");
  const [paymentMethod, setPaymentMethod] = useState(
    props.expense.paymentType || PaymentMethod.CASH
  );
  const categoryFull = useSelector((state) =>
    props.expense.category
      ? state.categories.categories[props.expense.category]
      : ""
  );
  const [category, setCategory] = useState(categoryFull);
  const [note, setNote] = useState(props.expense.note || "");

  const [isValidExpense, setIsValidExpense] = useState(false);

  const [isMoreInfoShown, setIsMoreInfoShown] = useState(
    Boolean(props.expense.note)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsValidExpense(category && amount > 0);
  }, [amount, category]);

  const createOnClick = (e) => {
    e.preventDefault();
    const newExpense = {
      date: date.toISOString(),
      amount,
      paymentType: paymentMethod,
      category: category._id,
      note,
    };
    if (props.isCreate) {
      dispatch(addExpense(newExpense));
    } else {
      dispatch(updateExpense({ ...newExpense, _id: props.expense._id }));
    }
    props.afterAction();
  };

  return (
    <form className={styles.wrapper} autoComplete="off" ref={ref}>
      <AmountTextfield
        value={amount}
        setAmount={setAmount}
        gapClassname={styles.gap}
      />
      <CategorySelect
        value={category}
        setCategory={setCategory}
        gapClassname={styles.gap}
      />
      <MiniInfo
        isShown={isMoreInfoShown}
        date={date}
        paymentMethod={paymentMethod}
        gapClassname={styles.gap}
      />
      <div
        style={{ display: isMoreInfoShown ? "" : "none" }}
        className={styles.moreInfo}
      >
        <DatePicker date={date} setDate={setDate} gapClassname={styles.gap} />

        <PaymentMethodRadio
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          gapClassname={styles.gap}
        />
        <NoteTextfield
          label="Note"
          value={note}
          setNote={setNote}
          gapClassname={styles.gap}
        />
      </div>
      <ActionsButtonGroup
        cardType={"expense"}
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
CreateExpense.propTypes = {
  close: PropTypes.func.isRequired,
  afterAction: PropTypes.func,
  expense: PropTypes.object,
  isCreate: PropTypes.bool,
};
CreateExpense.defaultProps = {
  expense: {},
  isCreate: true,
  afterAction: () => {},
};

export default CreateExpense;
