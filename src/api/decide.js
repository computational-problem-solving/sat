import assert from 'assert';

import KeysInstance from '../core/convert/KeysInstance.js';
import ParitiesInstance from '../core/convert/ParitiesInstance.js';
import SignsInstance from '../core/convert/SignsInstance.js';

import solve from './solve.js';

/**
 * Decide whether the given instance has a satisfying assignment.
 *
 * @param {ParitiesInstance|SignsInstance|KeysInstance} instance
 * @return {boolean} Whether the instance has a satisfying assignment.
 */
export default function decide(instance) {
	assert(
		instance instanceof ParitiesInstance ||
			instance instanceof SignsInstance ||
			instance instanceof KeysInstance,
	);
	return !solve(instance).next().done;
}
