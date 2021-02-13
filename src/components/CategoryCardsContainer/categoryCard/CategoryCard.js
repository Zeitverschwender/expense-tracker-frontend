import React from 'react'
import PropTypes from 'prop-types'
import styles from './CategoryCard.module.scss'

const CategoryCard = props => {
    return (
        <div>
            cat title { props.category.title}
            <div>
                cat color { props.category.color}
            </div>
        </div>
    )
}

CategoryCard.propTypes = {

}

export default CategoryCard
