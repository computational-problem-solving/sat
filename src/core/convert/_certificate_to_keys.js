import {zip} from '@aureooms/js-itertools';

/**
 * Constructs an assignment map from a list of variable names and an assignment
 * vector in parity format.
 *
 * @param variables
 * @param certificate
 * @returns {undefined}
 */
export function _certificate_to_keys(variables, certificate) {
	return new Map(zip(variables, certificate));
}
