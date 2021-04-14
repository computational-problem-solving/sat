import _certificate_to_keys from './_certificate_to_keys.js';

/**
 * Maintains a mapping between variable names and a parity
 * representation of the instance.
 */
export default class KeysInstance {
	/**
	 * Constructor.
	 *
	 * Clauses are in parity format. The variables parameter allows to map
	 * variable indices to variable names.
	 *
	 * @param {any[]} variables The variables of this instance.
	 * @param {number[][]} clauses The clauses in parity format.
	 */
	constructor(variables, clauses) {
		/** @member {any[]} The variables of this instance. */
		this.variables = variables;
		/** @member {number[][]} The clauses in parity format. */
		this.clauses = clauses;
		/** @member {number} The number of variables in this instance. */
		this.n = this.variables.length;
	}

	/**
	 * Returns an object that maps each variable name to a variable assignment.
	 *
	 * @param {number[]} certificate
	 * @return {Map<any, number>}
	 */
	assignment(certificate) {
		return _certificate_to_keys(this.variables, certificate);
	}
}
