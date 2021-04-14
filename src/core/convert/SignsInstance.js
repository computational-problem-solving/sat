import _count from './_count.js';

export default class SignsInstance {
	/**
	 * Clauses are in parity format.
	 *
	 * @param {number[][]} clauses The clauses in parity format.
	 */
	constructor(clauses) {
		/** @member {number[][]} The clauses in parity format. */
		this.clauses = clauses;
		/** @member {number} The number of variables in this instance. */
		this.n = _count(clauses);
	}

	/**
	 * Returns assignment vector in signs format.
	 *
	 * @param {number[]} certificate
	 * @return {number[]}
	 */
	assignment(certificate) {
		return [0].concat(certificate);
	}
}
