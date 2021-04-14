import _skip_blanks from './_skip_blanks.js';
import _parse_int from './_parse_int.js';

/**
 * _parse_DIMACS_CNF.
 *
 * @param {Iterable<string>} iterable
 */
export default function _parse_DIMACS_CNF(iterable) {
	const iterator = iterable[Symbol.iterator]();

	const clauses = [];

	// Skip comments
	while (true) {
		const current = iterator.next();

		if (current.done) return clauses;

		const c = current.value;

		// Go to problem description
		if (c === 'p') break;

		// Skip comment
		while (true) {
			const current = iterator.next();

			if (current.done) return clauses;

			// End of comment
			if (current.value === '\n') break;
		}
	}

	// Parse problem description
	// ( we do not actually need to parse it if we suppose it is correct )

	while (true) {
		const current = iterator.next();

		if (current.done) return clauses;

		// End of description
		if (current.value === '\n') break;
	}

	// Parse problem

	// eslint-disable-next-line no-labels
	loop: while (true) {
		const clause = [];

		while (true) {
			const [done1, symbol] = _skip_blanks(iterator);
			if (done1) {
				if (clause.length > 0) clauses.push(clause);
				return clauses;
			}

			const [done2, i] = _parse_int(symbol, iterator);
			if (i === 0) {
				if (done2) return clauses;
				clauses.push(clause);
				// eslint-disable-next-line no-labels
				continue loop;
			}

			clause.push(i > 0 ? (i - 1) << 1 : ((-i - 1) << 1) | 1);

			if (done2) {
				clauses.push(clause);
				return clauses;
			}
		}
	}
}
