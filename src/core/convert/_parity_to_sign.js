import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';

/**
 * _parity_to_sign.
 *
 * @param {number[][]} clauses
 * @return {number[][]}
 */
export default function _parity_to_sign(clauses) {
	return list(
		map(
			(clause) =>
				list(
					map(
						(literal) =>
							literal & 1 ? -(literal >>> 1) - 1 : (literal >>> 1) + 1,
						clause,
					),
				),
			clauses,
		),
	);
}
