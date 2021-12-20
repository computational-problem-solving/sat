import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';

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
