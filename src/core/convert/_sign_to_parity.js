import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';

import SignsInstance from './SignsInstance.js';

/**
 * _sign_to_parity.
 *
 * @param {number[][]} clauses
 * @return {SignsInstance}
 */
export default function _sign_to_parity(clauses) {
	return new SignsInstance(
		list(
			map(
				(clause) =>
					list(
						map(
							(literal) =>
								literal > 0 ? (literal - 1) << 1 : ((-literal - 1) << 1) | 1,
							clause,
						),
					),
				clauses,
			),
		),
	);
}
