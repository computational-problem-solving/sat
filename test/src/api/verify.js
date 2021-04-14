import test from 'ava';

import * as sat from '../../../src/index.js';

test('check some certificates', (t) => {
	const instance = sat.from.signs([
		[-1, 2, 3],
		[-2, -4, 5],
		[1, -5],
	]);
	t.true(sat.verify(instance, [0, 0, 0, 0, 0]));
	t.true(sat.verify(instance, [1, 1, 1, 1, 1]));
	t.false(sat.verify(instance, [0, 0, 0, 1, 1]));
	t.false(sat.verify(instance, [1, 1, 1, 1, 0]));
});
