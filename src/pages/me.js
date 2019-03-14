import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Me = () => (
    <Layout>
        <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
        <h2>About Me</h2>
        <p>Hello, my name is Matthias Klebe. I love running, cooking and clean code.</p>
        <p>I love as well trying new technolgies, so I decided to
            build a portfolio page with gatsby.</p>
        <h3>Todo:</h3>
        <ul>
            <li>Put this Todo list in the issues section of my github project</li>
            <li>Add more text for the about page</li>
            <li>Add testing reports</li>
            <li>Unify styling</li>
            <li>Maybe have a proper designer taking a look at this page</li>
            <li>Implement more features</li>
        </ul>
    </Layout>
)

export default Me