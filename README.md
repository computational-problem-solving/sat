:satisfied: [@problem-solving/sat](https://computational-problem-solving.github.io/sat)
==

<p align="center">
<a href="https://xkcd.com/1801">
<img src="https://imgs.xkcd.com/comics/decision_paralysis.png" width="600">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Boolean formula satisfiability algorithms for JavaScript.
See [docs](https://computational-problem-solving.github.io/sat).
Parent is [js-algorithms](https://github.com/make-github-pseudonymous-again/js-algorithms).
For a polynomial time algorithm for the 2SAT problem see
[@problem-solving/2sat](https://github.com/computational-problem-solving/2sat).

```js
let instance = sat.from.signs( [ [ -1 , 2 , 3 ] , [ -2 , -4 , 5 ] , [ 1 , -5 ] ] ) ;
// or
// let instance = sat.from.keys(
// [
//   [ [ false , '1' ] , [ true , '2' ] , [ true , '3' ] ] ,
//   [ [ false , '2' ] , [ false , '4' ] , [ true , '5' ] ] ,
//   [ [ true , '1' ] , [ false , '5' ] ]
// ]
// ) ;
sat.decide( instance ) ; // true
sat.verify( instance , sat.solve( instance ).next( ).value ) ; // true
for ( let certificate of sat.solve( instance ) ) {
    console.log( instance.assignment( certificate ) ) ;
}
```

[![License](https://img.shields.io/github/license/computational-problem-solving/sat.svg)](https://raw.githubusercontent.com/computational-problem-solving/sat/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@problem-solving/sat.svg)](https://www.npmjs.org/package/@problem-solving/sat)
[![Tests](https://img.shields.io/github/workflow/status/computational-problem-solving/sat/ci:test?event=push&label=tests)](https://github.com/computational-problem-solving/sat/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/computational-problem-solving/sat.svg)](https://github.com/computational-problem-solving/sat/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/computational-problem-solving/sat.svg)](https://github.com/computational-problem-solving/sat/issues)
[![Downloads](https://img.shields.io/npm/dm/@problem-solving/sat.svg)](https://www.npmjs.org/package/@problem-solving/sat)

[![Code issues](https://img.shields.io/codeclimate/issues/computational-problem-solving/sat.svg)](https://codeclimate.com/github/computational-problem-solving/sat/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/computational-problem-solving/sat.svg)](https://codeclimate.com/github/computational-problem-solving/sat/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/computational-problem-solving/sat/main.svg)](https://codecov.io/gh/computational-problem-solving/sat)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/computational-problem-solving/sat.svg)](https://codeclimate.com/github/computational-problem-solving/sat/trends/technical_debt)
[![Documentation](https://computational-problem-solving.github.io/sat/badge.svg)](https://computational-problem-solving.github.io/sat/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@problem-solving/sat)](https://bundlephobia.com/result?p=@problem-solving/sat)

## :scroll: Reference

  - [Simple solver in Python](http://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html)
  - [SATLIB](http://www.cs.ubc.ca/~hoos/SATLIB/benchm.html)
