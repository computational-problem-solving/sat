import test from 'ava';
import * as sat from '../../src/index.js';

import fs from 'fs';

const macro = (t, name, satisfiable) => {
	const filename = './test/data/' + name + '.cnf';
	const iterable = fs.readFileSync(filename, {encoding: 'utf8'});

	const instance = sat.from.dcnf(iterable);

	if (!satisfiable) {
		t.false(sat.decide(instance));
	} else {
		t.true(sat.decide(instance));
		const certificate = sat.solve(instance).next().value;
		if (!certificate) t.fail('missing certificate');
		else t.true(sat.verify(instance, certificate));
	}
};

macro.title = (title, name, satisfiable) =>
	title || `${name} ${satisfiable ? 'SAT' : 'UNSAT'}`;

test(macro, 'uf20-01', 1);
test(macro, 'uf20-02', 1);
test(macro, 'uf20-03', 1);
test(macro, 'uf20-04', 1);
test(macro, 'uf20-05', 1);
test(macro, 'uf20-06', 1);
test(macro, 'uf20-07', 1);
test(macro, 'uf20-08', 1);
test(macro, 'uf20-09', 1);
test(macro, 'uf20-010', 1);
