import React from 'react'
import PropTypes from 'prop-types'
import style from './runsList.module.css'

const RunsList = ({ title, list }) => (
    <div>
        <h2>{title}</h2>
        <table className={style.table}>
            <thead className={style.head}>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Tournament</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {list.map((run, idx) => {
                return <tr key={`finishedRuns_${idx}`}>
                    <td>{run.date}</td>
                    <td>{run.name}</td>
                    <td>{run.tournament}</td>
                    <td>{run.time}</td>
                </tr>
                })
                }
            </tbody>
        </table>
    </div>
)

RunsList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array
}

export default RunsList