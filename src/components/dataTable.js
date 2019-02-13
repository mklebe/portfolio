import React from 'react'
import PropTypes from 'prop-types'
import style from './dataTable.module.css'

const DataTable = ({ title, tableHead = [], tableBody = [] }) => (
    <div>
        <h2>{title}</h2>
        <table className={style.table}>
            <thead className={style.head}>
                <tr>
                    {tableHead.map((headItem, head_idx) => {
                        return <th key={head_idx}>{headItem}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tableBody.map((row, row_idx) => {
                    return <tr key={row_idx}>
                        {row.map((cell, col_idx) => {
                            return <td key={col_idx}>{cell}</td>
                        })}
                    </tr>
                })
                }
            </tbody>
        </table>
    </div>
)

DataTable.propTypes = {
    title: PropTypes.string,
    tableHead: PropTypes.array,
    tableBody: PropTypes.arrayOf(Array),
}

export default DataTable