const solve = function* ( { clauses , n } ) {

	yield* _solve( n , clauses , setup_watchlist( n , clauses ) , makeassignment( n ) , 0 ) ;

} ;

exports.solve = solve ;
