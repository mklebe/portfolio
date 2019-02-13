import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import RunsList from '../components/runsList'

const RunsPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <RunsList title="Finished Runs" list={runs} />
  </Layout>
)

export default RunsPage

const Tournament = Object.freeze({
  Run10K: 'Run 10K',
  RunHalf: 'Halfmarathon',
  TriathlonSprint: 'Triathlon sprint distance',
})

class Run {
  /**
   * @param {String} name
   * @param {String} date
   * @param {String} tournament
   */
  constructor( name, date, tournament ) {
    this.name = name
    this.date = date
    this.tournament = tournament
  }
}

class FinishedRun extends Run {
  /**
   * @param {String} name
   * @param {String} date
   * @param {String} time
   * @param {String} tournament
   */
  constructor(name, date, time, tournament) {
    super( name, date, tournament )
    this.time = time
  }
}

const runs = [
  new FinishedRun('The Great 10K', 'October 8, 2017', '00:58:37', Tournament.Run10K),
  new FinishedRun('Oderpokallauf', 'May 27, 2018', '00:57:43', Tournament.Run10K),
  new FinishedRun('Potsdamer Schlösserlauf', 'June 3, 2018', '02:10:38', Tournament.RunHalf),
  new FinishedRun('Schlaubetal Triathlon', 'July 8, 2018', '01:23:04', Tournament.TriathlonSprint),
  new FinishedRun('The Great 10K', 'October 10, 2018', '00:53:58', Tournament.Run10K),
  new FinishedRun('Müggelsee-Halbmarathon', 'October 21, 2018', '02:00:13', Tournament.RunHalf)
]
