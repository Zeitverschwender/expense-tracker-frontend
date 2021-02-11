import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './ExpenseCard.module.scss'
import { DateTime } from 'luxon'

const ExpenseCard = props => {
    const time = DateTime.fromISO(props.expense.date).toFormat('dd/LL');
    return (
            <div className={styles.card}>
                <div className={styles.amount}>$ {props.expense.amount}</div>
                <div className={styles.category}>{props.expense.category.title}</div>
                <div className={styles.details}>det </div>
                <div className={styles.date}>{time}</div>
                
            <div className={styles.categoryColor}></div>
            </div>
    )
}

ExpenseCard.propTypes = {

}

export default ExpenseCard

