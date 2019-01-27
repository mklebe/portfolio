import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TechnologyList from '../components/technologyList';
import CompanyList from '../components/companyList';

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />

    <CompanyList 
        title="Companies I worked with"
        list={companies}
    />
    <TechnologyList 
        title="Technologies I worked with"
        list={technologies} />

  </Layout>
)

class Company {
    constructor(name, branche, timeperiod) {
        this.name = name
        this.branche = branche
        this.timeperiod = timeperiod
    }
}

const companies = [
    new Company(`Mister Spex GmbH`, `ecommerce`, `2017 - now`),
    new Company(`unitb consulting GmbH`, `other`, `2014 - 2017`),
    new Company(`aklamio GmbH`, `ecommerce`, `2012 - 2014`),
    new Company(`European Students' Conference`, `education`, `2011 - 2012`),
    new Company('excentos GmbH', `ecommerce`, `2009 - 2011`),
]

const technologies = [
    `JavaScript`,
    `NodeJS`,
    `Java`,
    `CSS`,
    `Ruby on Rails`,
    `php`,
    `Solr`,
    `AngularJs`,
    `Angular`,
    `React`,
    `Wordpress`,
    `TYPO3`,
]

export default IndexPage
