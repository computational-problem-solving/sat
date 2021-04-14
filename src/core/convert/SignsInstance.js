import {_count} from './_count.js';

export class SignsInstance {
	/**
	 * Clauses are in parity format.
	 */
	constructor(clauses) {
		this.clauses = clauses;
		this.n = _count(clauses);
	}

	/**
	 * Returns assignment vector in signs format.
	 */
	assignment(certificate) {
		return [0].concat(certificate);
	}
}
