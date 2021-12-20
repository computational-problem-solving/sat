import ParitiesInstance from '../core/convert/ParitiesInstance.js';
import _sign_to_parity from '../core/convert/_sign_to_parity.js';
import _keys_to_parity from '../core/convert/_keys_to_parity.js';
import _parse_DIMACS_CNF from '../core/parse/_parse_DIMACS_CNF.js';

/**
 * The input is converted to parity format in each case.
 */
const from = {
	/**
	 * The input is in parity format where variables are given integer labels
	 * 0 to n-1, a positive literal is represented by the double of its
	 * variable's label, and a negative literal is represented by the successor
	 * of the double of its variable's label.
	 *
	 * @param {number[][]} clauses The clauses in parity format.
	 * @return {ParitiesInstance}
	 */
	parities: (clauses) => new ParitiesInstance(clauses),
	/**
	 * The input is in signs format where variables are given integer labels
	 * 1 to n, a positive literal is represented by its variable's label, and a
	 * negative literal is represented by the opposite of its variable's label.
	 *
	 * @function
	 * @param {number[][]} clauses
	 * @return {SignsInstance}
	 */
	signs: _sign_to_parity,
	/**
	 * The input is in keys format where variables are given arbitrary object labels,
	 * a literal is represented by a pair from the set {true, false} x
	 * labels, where the first item in the pair is true if the literal is positive,
	 * and false otherwise.
	 *
	 * @function
	 * @param {[any,any][][]} clauses
	 * @return {KeysInstance}
	 */
	keys: _keys_to_parity,
	/**
	 * Parses a character iterable in DIMACS CNF format.
	 *
	 * @param {Iterable<string>} iterable
	 * @return {ParitiesInstance}
	 */
	dcnf: (iterable) => new ParitiesInstance(_parse_DIMACS_CNF(iterable)),
};

// eslint-disable-next-line prettier/prettier
export default from;
