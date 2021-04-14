export function _skip_blanks(iterator) {
	while (true) {
		const current = iterator.next();
		if (current.done) return [true, null];

		switch (current.value) {
			case ' ':
			case '\t':
			case '\n':
				continue;
			// HANDLE CUSTOM DELIMITER OF SATLIB
			case '%':
				return [true, null];
			default:
				return [false, current.value];
		}
	}
}

export function _parse_int(first_symbol, iterator) {
	let i = 0;
	let s = 1;

	if (first_symbol === '-') s = -1;
	else i = Number(first_symbol);

	while (true) {
		const current = iterator.next();
		if (current.done) return [true, s * i];

		const c = current.value;

		if (c < '0' || c > '9') return [false, s * i];

		i *= 10;
		i += Number(c);
	}
}

export function _parse_DIMACS_CNF(iterable) {
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
