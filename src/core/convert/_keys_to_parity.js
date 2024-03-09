import KeysInstance from './KeysInstance.js';

/**
 * _keys_to_parity.
 *
 * @param {[any,any][][]} clauses
 * @return {KeysInstance}
 */
export default function _keys_to_parity(clauses) {
	const keys = new Map();
	const variables = [];

	const instance = [];

	for (const clause of clauses) {
		const new_clause = new Set();

		for (const [positive, variable] of clause) {
			if (!keys.has(variable)) {
				keys.set(variable, variables.length);
				variables.push(variable);
			}

			const negated = positive ? 0 : 1;
			const literal = (keys.get(variable) << 1) | negated;

			new_clause.add(literal);
		}

		instance.push(Array.from(new_clause));
	}

	return new KeysInstance(variables, instance);
}
