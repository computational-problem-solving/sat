import SAT0W from '../core/SAT0W/SAT0W.js';
import setup_watchlist from '../core/SAT0W/setup_watchlist.js';
import setup_assignment from '../core/setup_assignment.js';

/**
 * Yields all satisfying assignments for the input instance.
 *
 * @param {ParitiesInstance|SignsInstance|KeysInstance} instance
 * @returns {IterableIterator<number[]>} Generator of the satisfying assignments.
 */
export default function solve({clauses, n}) {
	// eslint-disable-next-line new-cap
	return SAT0W(n, clauses, setup_watchlist(n, clauses), setup_assignment(n), 0);
}
