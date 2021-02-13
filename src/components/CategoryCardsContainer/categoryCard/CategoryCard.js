import React from 'react'
import PropTypes from 'prop-types'
import styles from './CategoryCard.module.scss'

const CategoryCard = props => {
    const colorStyle = {
        color: props.category.color
    }
    return (
        <div>
            cat title { props.category.title}
            <div style={colorStyle}>
                cat color { props.category.color}
            </div>
        </div>
    )
}

CategoryCard.propTypes = {

}

export default CategoryCard