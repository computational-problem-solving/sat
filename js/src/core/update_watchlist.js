function update_watchlist ( instance , watchlist , false_literal , assignment ) {

    /**
     * Updates the watch list after literal 'false_literal' was just assigned
     * False, by making any clause watching false_literal watch something else.
     * Returns False it is impossible to do so, meaning a clause is contradicted
     * by the current assignment.
	 */
    while ( watchlist[false_literal].length ) {

        let clause = watchlist[false_literal][watchlist[false_literal].length - 1] ;
        let found_alternative = false ;

        for ( let alternative of clause ) {

            let v = alternative >>> 1 ;
            let a = alternative & 1 ;

            if ( assignment[v] === -1 || assignment[v] === a ^ 1 ) {
                found_alternative = true ;
                watchlist[false_literal].pop( ) ;
                watchlist[alternative].push( clause ) ;
                break ;
			}

		}

        if ( !found_alternative ) return false ;

	}

    return true ;

}

exports.update_watchlist = update_watchlist ;
