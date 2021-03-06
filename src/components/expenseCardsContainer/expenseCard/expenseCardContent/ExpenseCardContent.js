import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

import CreditCardIcon from "@material-ui/icons/CreditCard";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";
import dollar from "../../../../assets/images/dollar.svg";

import styles from "./ExpenseCardContent.module.scss";
import { Tooltip, Zoom } from "@material-ui/core";
import { useSelector } from "react-redux";
import getTitleColor from "../../../../utils/getTitleColor"
function ExpenseCardContent(props) {
  const time = DateTime.fromISO(props.expense.date).toFormat("dd/LL");
  const category = useSelector(
    (state) => state.categories.categories[props.expense.category]
  ) || { title: "loading", color: "pink" };
  return (
    <div className={styles.cardContent} onClick={() => props.toggleClicked()}>
      <div className={styles.firstRow}>
        <div className={styles.amount}>
          ${props.expense.amount.toLocaleString()}
        </div>
        <Tooltip
          TransitionComponent={Zoom}
          title={DateTime.fromJSDate(
            new Date(props.expense.date)
          ).toLocaleString(DateTime.DATETIME_MED)}
          interactive
          classes={{ tooltipPlacementBottom: styles.dateTooltip }}
          arrow
          placement="bottom-start"
        >
          <div className={styles.date}>{time}</div>
        </Tooltip>
      </div>
      <div className={styles.category} style={{ background: category.color, color: getTitleColor(category.color)}}>
        {category.title}
      </div>
      <div className={styles.iconsList}>
        {props.expense.paymentType === "Cash" ? (
          <img src={dollar} alt="Cash icon" />
        ) : (
          <CreditCardIcon />
        )}
        {props.expense.note && <SubjectSharpIcon />}
      </div>
    </div>
  );
}

ExpenseCardContent.propTypes = {
  expense: PropTypes.object.isRequired,
  toggleClicked: PropTypes.func.isRequired,
};

export default ExpenseCardContent;
