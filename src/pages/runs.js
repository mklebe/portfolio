import React from 'react'

import {TOURNAMENT, FinishedRun, FinishedRunList} from '../model/Run'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DataTable from '../components/dataTable'

const runs = new FinishedRunList()

runs.addRun(new FinishedRun('The Great 10K', 'October 8, 2017', '00:58:37', TOURNAMENT.Run10K))
runs.addRun(new FinishedRun('Oderpokallauf', 'May 27, 2018', '00:57:43', TOURNAMENT.Run10K))
runs.addRun(new FinishedRun('Potsdamer Schlösserlauf', 'June 3, 2018', '02:10:38', TOURNAMENT.RunHalf))
runs.addRun(new FinishedRun('Schlaubetal Triathlon', 'July 8, 2018', '01:23:04', TOURNAMENT.TriathlonSprint))
runs.addRun(new FinishedRun('The Great 10K', 'October 10, 2018', '00:53:58', TOURNAMENT.Run10K))
runs.addRun(new FinishedRun('Müggelsee-Halbmarathon', 'October 21, 2018', '02:00:13', TOURNAMENT.RunHalf))

const RunsPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <DataTable 
      title="Finished Runs"
      tableBody={runs.getBodyFields()}
      tableHead={runs.getHeadFields()} 
    />
  </Layout>
)

export default RunsPage