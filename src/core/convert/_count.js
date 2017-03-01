
export function _count ( clauses ) {

	let c = -1 ;

	for ( const clause of clauses ) {
		for ( const literal of clause ) {
			c = Math.max( c , literal >>> 1 ) ;
		}
	}

	return c + 1 ;

}
