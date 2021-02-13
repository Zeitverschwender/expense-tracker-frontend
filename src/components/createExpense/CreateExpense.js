import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import styles from "./CreateExpense.module.scss";
import PaymentMethod from "../../models/PaymentType";

import AmountTextfield from "./formControls/amountTextfield/AmountTextfield";
import DatePicker from "./formControls/datePicker/DatePicker";
import PaymentMethodRadio from "./formControls/paymentMethodRadio/PaymentMethodRadio";
import ActionsButtonGroup from "./formControls/actionsButtonGroup/ActionsButtonGroup";
import CategorySelect from "./formControls/categorySelect/CategorySelect";
import MiniInfo from "./miniInfo/MiniInfo";
import NoteTextfield from "./formControls/noteTextfield/NoteTextfield";
import { useDispatch } from "react-redux";
import { addExpense } from "../../store/actions";

const defaultPaymentMethod = PaymentMethod.CASH;

const CreateExpense = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(defaultPaymentMethod);
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const [isValidExpense, setIsValidExpense] = useState(false);

  const [isMoreInfoShown, setIsMoreInfoShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsValidExpense(category && amount > 0);
  }, [amount, category]);

  const createOnClick = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        date: date.toISOString(),
        amount,
        paymentType: paymentMethod,
        category: category._id, // ? hmm
        note,
      })
    );
  };

  return (
    <form className={styles.wrapper} autoComplete="off" ref={ref}>
      <AmountTextfield setAmount={setAmount} gapClassname={styles.gap} />
      <CategorySelect setCategory={setCategory} gapClassname={styles.gap} />
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
          defaultValue={defaultPaymentMethod}
          setPaymentMethod={setPaymentMethod}
          gapClassname={styles.gap}
        />
        <NoteTextfield setNote={setNote} gapClassname={styles.gap} />
      </div>
      <ActionsButtonGroup
        onCreate={createOnClick}
        isCreateDisabled={!isValidExpense}
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
};

export default CreateExpense;
