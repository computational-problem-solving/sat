import {list, map} from '@aureooms/js-itertools';

/**
 * _parity_to_keys.
 *
 * @param {any[]} variables
 * @param {number[][]} clauses
 */
export default function _parity_to_keys(variables, clauses) {
	return list(
		map(
			(clause) =>
				list(
					map((literal) => [!(literal & 1), variables[literal >>> 1]], clause),
				),
			clauses,
		),
	);
}
