/**
 * Counts the number of variables in a parity format clauses list.
 *
 * @param {number[][]} clauses The clauses list in parity format.
 * @returns {number} The number of variables in the clauses list.
 */
export default function _count(clauses) {
	let c = -1;

	for (const clause of clauses) {
		for (const literal of clause) {
			c = Math.max(c, literal >>> 1);
		}
	}

	return c + 1;
}
