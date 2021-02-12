import { Button, ButtonGroup } from "@material-ui/core";

import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./CreateExpense.module.scss";
import PaymentMethod from "../../models/PaymentType";

import AmountTextfield from "./formControls/amountTextfield/AmountTextfield";
import DatePicker from "./formControls/datePicker/DatePicker";
import PaymentMethodRadio from "./formControls/paymentMethodRadio/PaymentMethodRadio";

const defaultPaymentMethod = PaymentMethod.CASH;

const CreateExpense = React.forwardRef((props, ref) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(defaultPaymentMethod);

  const [isMoreInfoShown, setIsMoreInfoShown] = useState(false);

  return (
    <form className={styles.wrapper} autoComplete="off" ref={ref}>
      <AmountTextfield setAmount={setAmount} gapClassname={styles.gap} />
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
      </div>
      <ButtonGroup
        classes={{ root: styles.buttonGroup }}
        color="primary"
        aria-label="create expense button group"
      >
        <Button aria-label="Create">Create</Button>
        <Button
          aria-label="More Info"
          onClick={() => setIsMoreInfoShown(!isMoreInfoShown)}
        >
          {isMoreInfoShown ? (
            <ExpandLessOutlinedIcon />
          ) : (
            <ExpandMoreOutlinedIcon />
          )}
        </Button>
        <Button aria-label="Close" onClick={props.close}>
          <CloseSharpIcon />
        </Button>
      </ButtonGroup>
    </form>
  );
});
CreateExpense.propTypes = {
  close: PropTypes.func.isRequired,
};

export default CreateExpense;
