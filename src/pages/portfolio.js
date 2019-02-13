import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TechnologyList from '../components/technologyList';
import DataTable from '../components/dataTable';

const companies = [
    [`Mister Spex GmbH`, `ecommerce`, `2017 - now`],
    [`unitb consulting GmbH`, `other`, `2014 - 2017`],
    [`aklamio GmbH`, `ecommerce`, `2012 - 2014`],
    [`European Students' Conference`, `education`, `2011 - 2012`],
    ['excentos GmbH', `ecommerce`, `2009 - 2011`],
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

const IndexPage = () => (
    <Layout>
      <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
  
      <DataTable 
          title="Companies I worked with"
          tableHead={['Company', 'Branche', 'Timeperiod']}
          tableBody={companies}
      />
      <TechnologyList 
          title="Technologies I worked with"
          list={technologies} />
  
    </Layout>
  )

export default IndexPage
