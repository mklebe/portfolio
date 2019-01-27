import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import layoutStyles from './layout.module.css'

import Header from './header'
import './layout.css'
import Footer from './footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={layoutStyles.page}>
          <header className={layoutStyles.page__header}>
            <Header siteTitle={data.site.siteMetadata.title} />
          </header>
          <main className={layoutStyles.page__content}>
            {children}
          </main>

          <footer className={layoutStyles.page__footer}>
            <Footer />
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
