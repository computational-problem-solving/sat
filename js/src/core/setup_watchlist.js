function setup_watchlist ( instance ) {

    let watchlist = [ ] ;

	for ( let i = 0 ; i < 2 * instance.variables.length ; ++i ) watchlist.push( [ ] ) ;

    for ( let clause of instance.clauses ) {
        //# Make the clause watch its first literal
        watchlist[clause[0]].push( clause ) ;
	}

    return watchlist ;

}

exports.setup_watchlist = setup_watchlist ;
