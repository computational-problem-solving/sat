import test from 'ava';
import * as sat from '../../src/index.js';

import * as compare from '@aureooms/js-compare';
import {list, map} from '@aureooms/js-itertools';

const lex = compare.lexicographical(compare.increasing);

test('#1', (t) => {
	const instance = sat.from.keys([
		[
			[1, 'x'],
			[1, 'x'],
			[1, 'y'],
		],
		[
			[0, 'x'],
			[0, 'y'],
			[0, 'y'],
		],
		[
			[0, 'x'],
			[1, 'y'],
			[1, 'y'],
		],
	]);

	const solutions = sat.solve(instance);
	const state = solutions.next();
	t.true(sat.verify(instance, state.value));
	t.true(sat.decide(instance));

	t.true(!state.done);

	const assignment = instance.assignment(state.value);

	t.true(solutions.next().done);

	t.deepEqual(list(assignment.entries()).sort(lex), [
		['x', 0],
		['y', 1],
	]);
});

test('#2', (t) => {
	const instance = sat.from.keys([
		[
			[1, 'A'],
			[1, 'B'],
			[0, 'C'],
		],
		[
			[1, 'B'],
			[1, 'C'],
		],
		[[0, 'B']],
		[
			[0, 'A'],
			[1, 'C'],
		],
	]);

	const solutions = sat.solve(instance);
	const state = solutions.next();
	t.true(sat.verify(instance, state.value));
	t.true(sat.decide(instance));

	t.true(!state.done);

	const assignment = instance.assignment(state.value);

	t.true(solutions.next().done);

	t.deepEqual(list(assignment.entries()).sort(lex), [
		['A', 1],
		['B', 0],
		['C', 1],
	]);
});

test('#3', (t) => {
	const instance = sat.from.signs([
		[-1, 2, 3],
		[-2, -4, 5],
		[1, -5],
	]);
	const satisfying_assignments = list(
		map((certificate) => instance.assignment(certificate), sat.solve(instance)),
	);
	t.deepEqual(satisfying_assignments, [
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0],
		[0, 0, 0, 1, 0, 0],
		[0, 0, 0, 1, 1, 0],
		[0, 0, 1, 0, 0, 0],
		[0, 0, 1, 1, 0, 0],
		[0, 1, 0, 1, 0, 0],
		[0, 1, 0, 1, 0, 1],
		[0, 1, 0, 1, 1, 0],
		[0, 1, 0, 1, 1, 1],
		[0, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 0, 1],
		[0, 1, 1, 0, 1, 1],
		[0, 1, 1, 1, 0, 0],
		[0, 1, 1, 1, 0, 1],
		[0, 1, 1, 1, 1, 1],
	]);
});
