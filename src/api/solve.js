import {SAT0W, setup_watchlist, setup_assignment} from '../core/index.js';

/**
 * Yields all satisfying assignments for the input instance.
 *
 * @returns {Iterable} Generator of the satisfying assignments.
 */
export function* solve({clauses, n}) {
	// eslint-disable-next-line new-cap
	yield* SAT0W(n, clauses, setup_watchlist(n, clauses), setup_assignment(n), 0);
}
