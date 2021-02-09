import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ExpenseCard = props => {
    return (
        <div>
            <div>{props.expense.amount}</div>
        </div>
    )
}

ExpenseCard.propTypes = {

}

export default ExpenseCard

