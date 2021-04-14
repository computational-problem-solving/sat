/**
 * Verifies that an assignment vector satisfies a k-CNF formula given as a list
 * of clauses. The list of clauses and the assignment vector are in parity
 * format.
 *
 * @param {number[][]} clauses The clauses in parity format.
 * @param {number[]} assignment The assignment vector in parity format.
 * @returns {boolean} Whether the assignment satisfies the k-CNF formula
 * represented by the list of clauses.
 */
export default function _verify(clauses, assignment) {
	// eslint-disable-next-line no-labels
	loop: for (const clause of clauses) {
		for (const literal of clause) {
			// eslint-disable-next-line no-labels
			if ((literal ^ assignment[literal >>> 1]) & 1) continue loop;
		}

		return false;
	}

	return true;
}
