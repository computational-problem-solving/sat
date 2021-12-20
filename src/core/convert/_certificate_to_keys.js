import {_zip2} from '@iterable-iterator/zip';

/**
 * Constructs an assignment map from a list of variable names and an assignment
 * vector in parity format.
 *
 * @param {any[]} variables
 * @param {number[]} certificate
 * @return {Map<any, number>}
 */
export default function _certificate_to_keys(variables, certificate) {
	return new Map(_zip2(variables, certificate));
}
