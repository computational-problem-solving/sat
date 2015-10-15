function setup_watchlist ( n , clauses ) {

    let watchlist = [ ] ;

	for ( let i = 0 ; i < 2 * n ; ++i ) watchlist.push( [ ] ) ;

    for ( let clause of clauses ) {
        //# Make the clause watch its first literal
        watchlist[clause[0]].push( clause ) ;
	}

    return watchlist ;

}

exports.setup_watchlist = setup_watchlist ;
