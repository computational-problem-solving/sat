import { SAT0W , setup_watchlist, setup_assignment } from '../core' ;

export function* solve ( { clauses , n } ) {

	yield* SAT0W( n , clauses , setup_watchlist( n , clauses ) , setup_assignment( n ) , 0 ) ;

}

