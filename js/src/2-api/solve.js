const solve = function* ( { clauses , n } ) {

	yield* SAT0W( n , clauses , setup_watchlist( n , clauses ) , setup_assignment( n ) , 0 ) ;

} ;

exports.solve = solve ;
