import React from 'react'
import style from './technologyList.module.css'
import PropTypes from 'prop-types'

const TechnologyList = ({ title, list }) => (
    <div>
        <h2>{title}</h2>
        <ul className={style.list}>
            {list.map( (key, idx) => {
                return <li key={`technology_${idx}`} className={style.item}>{key}</li>
            })}
        </ul>
    </div>
)

TechnologyList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array
}

export default TechnologyList
