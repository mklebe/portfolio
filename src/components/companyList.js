import React from 'react'
import style from './companyList.module.css'
import PropTypes from 'prop-types'

const CompanyList = ({ title, list }) => (
    <div>
        <h2>{title}</h2>
        <ul className={style.list}>
            {list.map( (company, idx) => {
                return <li key={`company_${idx}`} className={style.item}>{getCompanyMarkup(company)}</li>
            })}
        </ul>
    </div>
)

CompanyList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array
}

const getCompanyMarkup = ( company ) => {
    return  <div className={style.company}>
                <div className={style.timeperiod}>{company.timeperiod}</div>
                <div className={style.name}>{company.name}</div>
                <div className={style.branche}>{company.branche}</div>
            </div>

}

export default CompanyList
