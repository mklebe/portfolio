const TOURNAMENT = Object.freeze({
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

    destruct() {
        return [
            this.name,
            this.date,
            this.time,
            this.tournament
        ]
    }
}

class FinishedRunList {
    _runList = []

    /**
     * @param {FinishedRun} run 
     */
    addRun( run ) {
        this._runList.push( run )
    }

    /**
     * @return {String[]}
     */
    getHeadFields() {
        return ['Name', 'Date', 'Time', 'Tournament']
    }

    /**
     * @return {Array<Array<String>>}
     */
    getBodyFields() {
        return this._runList.map(run => run.destruct())
    }
}

export {FinishedRun, FinishedRunList, TOURNAMENT}