import React from 'react'
import { Link } from '@reach/router'
import footerStyle from './footer.module.css'

const Footer = ({ siteTitle }) => (
    <div className={footerStyle.footer}>
        <span>Matthias Klebe GbR</span>
        <Link to="/imprint">Imprint</Link>
    </div>
)

export default Footer
