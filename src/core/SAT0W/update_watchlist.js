/**
 * Updates the watch list after literal 'false_literal' was just assigned
 * False, by making any clause watching false_literal watch something else.
 * Returns False it is impossible to do so, meaning a clause is contradicted
 * by the current assignment.
 *
 * @param {number[][][]} watchlist
 * @param {number} false_literal
 * @param {number[]} assignment
 */
export default function update_watchlist(watchlist, false_literal, assignment) {
	while (watchlist[false_literal].length > 0) {
		const clause = watchlist[false_literal].at(-1);
		let found_alternative = false;

		for (const alternative of clause) {
			const v = alternative >>> 1;
			const a = alternative & 1;

			if (assignment[v] === -1 || (assignment[v] === a) ^ 1) {
				found_alternative = true;
				watchlist[false_literal].pop();
				watchlist[alternative].push(clause);
				break;
			}
		}

		if (!found_alternative) return false;
	}

	return true;
}
