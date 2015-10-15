
const _verify = function ( clauses , assignment ) {

	loop : for ( const clause of clauses ) {

		for ( const literal of clause ) {

			if ( ( literal ^ assignment[literal >>> 1] ) & 1 ) continue loop ;

		}

		return false ;

	}

	return true ;

} ;
