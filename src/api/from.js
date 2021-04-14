import { ParitiesInstance , _sign_to_parity, _keys_to_parity, _parse_DIMACS_CNF } from "../core/index.js" ;

/**
 * The input is converted to parity format in each case.
 */
export const from = {
	/**
	 * The input is in parity format where variables are given integer labels
	 * 0 to n-1, a positive literal is represented by the double of its
	 * variable's label, and a negative literal is represented by the successor
	 * of the double of its variable's label.
	 */
	parities : ( clauses ) => new ParitiesInstance( clauses ) ,
	/**
	 * The input is in signs format where variables are given integer labels
	 * 1 to n, a positive literal is represented by its variable's label, and a
	 * negative literal is represented by the opposite of its variable's label.
	 */
	signs : _sign_to_parity ,
	/**
	 * The input is in keys format where variables are given arbitrary object labels,
	 * a literal is represented by a pair from the set {true, false} x
	 * labels, where the first item in the pair is true if the literal is positive,
	 * and false otherwise.
	 */
	keys : _keys_to_parity ,
	/**
	 * Parses a character iterable in DIMACS CNF format.
	 */
	dcnf : ( iterable ) => new ParitiesInstance( _parse_DIMACS_CNF( iterable ) )
} ;
