import {update_watchlist} from './update_watchlist.js';

export function* SAT0W(n, clauses, watchlist, assignment, d) {
	/**
	 * Recursively solve SAT by assigning to variables d, d+1, ..., n-1. Assumes
	 * variables 0, ..., d-1 are assigned so far. A generator for all the
	 * satisfying assignments is returned.
	 */
	if (d === n) {
		yield assignment;
		return;
	}

	for (const a of [0, 1]) {
		assignment[d] = a;

		if (update_watchlist(watchlist, (d << 1) | a, assignment)) {
			// eslint-disable-next-line new-cap
			yield* SAT0W(n, clauses, watchlist, assignment, d + 1);
		}
	}

	assignment[d] = -1;
}
