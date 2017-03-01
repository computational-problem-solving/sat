
/**
 * Verifies that an assignment vector satisfies a k-CNF formula given as a list
 * of clauses. The list of clauses and the assignment vector are in parity
 * format.
 *
 * @param {Iterable} clauses The clauses in parity format.
 * @param {Array} assignment The assignment vector in parity format.
 * @returns {Boolean} Whether the assignment satisfies the k-CNF formula
 * represented by the list of clauses.
 */
export function _verify ( clauses , assignment ) {

	loop : for ( const clause of clauses ) {

		for ( const literal of clause ) {

			if ( ( literal ^ assignment[literal >>> 1] ) & 1 ) continue loop ;

		}

		return false ;

	}

	return true ;

}
