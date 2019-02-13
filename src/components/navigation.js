import { Link } from 'gatsby'
import React from 'react'

import style from './navigation.module.css'

const Navigation = () => (
    <ul className={style.navigation}>
      {pages.map((page, index) => {
          return <li key={`navigation_${index}`}>
                    <Link
                        to={page.path}
                        className={style.item}
                        getProps={({ isPartiallyCurrent }) => {
                            return isPartiallyCurrent ? { className: style.active } : null
                          }}
                    >
                        {page.key}
                    </Link>
                </li>
      })}
  </ul>
)

class Page {
    constructor(path, key) {
        this.path = path
        this.key = key
    }
}

const pages = [
    new Page('/portfolio', 'Portfolio'),
    new Page('/runs', 'Runs'),
    new Page('/me', 'About Me'),
]

export default Navigation
