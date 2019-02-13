import React from 'react'
import { Link } from '@reach/router'
import style from './footer.module.css'

const Footer = ({ siteTitle }) => (
    <div className={style.footer}>
        <Link className={style.link} to="/imprint">Imprint</Link>
    </div>
)

export default Footer
