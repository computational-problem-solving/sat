import test from 'ava';

import * as sat from '#module';

function text(lines) {
	return lines.join('\n') + '\n';
}

test('DIMACS 1', (t) => {
	const instance = sat.from.dcnf(
		text([
			'c jdkljsqmljdmsqljf jds kljd mlsqkjdl ',
			'c p cnf 10 20',
			'c 1 2 0 0 2 -1 0',
			'c jdkljsqmljdmsqljf jds kljd mlsqkjdl ',
			'c jdkljsqmljdmsqljf\tjds kljd mlsqkjdl ',
			'p cnf 3 4',
			'%',
			'djshhfkdsjhkf hkjsdfh kjsdhf k',
		]),
	);

	t.is(instance.n, 0);
	t.deepEqual(instance.clauses, []);
});

test('DIMACS 2', (t) => {
	const instance = sat.from.dcnf(
		text([
			'c jdkljsqmljdmsqljf jds kljd mlsqkjdl ',
			'c p cnf 10 20',
			'c 1 2 0 0 2 -1 0',
			'c jdkljsqmljdmsqljf jds kljd mlsqkjdl ',
			'c jdkljsqmljdmsqljf\tjds kljd mlsqkjdl ',
			'p cnf 3 4',
			'1 0 1 2 3',
			'0',
			'-1 -2',
			'-3 0 1 -2 3',
			'%',
			'djshhfkdsjhkf hkjsdfh kjsdhf k',
		]),
	);

	t.is(instance.n, 3);
	t.deepEqual(instance.clauses, [[0], [0, 2, 4], [1, 3, 5], [0, 3, 4]]);
});

test('DIMACS 3', (t) => {
	const instance = sat.from.dcnf(
		text([
			'c jdkljsqmljdmsqljf jds kljd mlsqkjdl ',
			'c p cnf 10 20',
			'c 1 2 0 0 2 -1 0',
			'c jdkljsqmljdmsqljf jds kljd mlsqkjdl ',
			'c jdkljsqmljdmsqljf\tjds kljd mlsqkjdl ',
			'p cnf 30 4',
			'10 0 10 20 30',
			'0',
			'-10 -20',
			'-30 0 10 -20 30',
			'%',
			'djshhfkdsjhkf hkjsdfh kjsdhf k',
		]),
	);

	t.is(instance.n, 30);
	t.deepEqual(instance.clauses, [
		[18],
		[18, 38, 58],
		[19, 39, 59],
		[18, 39, 58],
	]);
});
