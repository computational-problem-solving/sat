import {list, map} from '@aureooms/js-itertools';

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
