:satisfied: [@aureooms/js-sat](https://aureooms.github.io/js-sat)
==

<p align="center">
<a href="https://xkcd.com/287">
<img src="https://imgs.xkcd.com/comics/np_complete.png" width="600">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Boolean formula satisfiability algorithms for JavaScript.
See [docs](https://aureooms.github.io/js-sat).
Parent is [@aureooms/js-algorithms](https://github.com/aureooms/js-algorithms).
For a polynomial time algorithm for the 2SAT problem see
[@aureooms/js-2sat](https://github.com/aureooms/js-2sat).

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

[![License](https://img.shields.io/github/license/aureooms/js-sat.svg)](https://raw.githubusercontent.com/aureooms/js-sat/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-sat.svg)](https://www.npmjs.org/package/@aureooms/js-sat)
[![Build](https://img.shields.io/travis/aureooms/js-sat/main.svg)](https://travis-ci.com/aureooms/js-sat/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-sat.svg)](https://david-dm.org/aureooms/js-sat)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-sat.svg)](https://david-dm.org/aureooms/js-sat?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-sat.svg)](https://github.com/aureooms/js-sat/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-sat.svg)](https://www.npmjs.org/package/@aureooms/js-sat)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-sat.svg)](https://codeclimate.com/github/aureooms/js-sat/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-sat.svg)](https://codeclimate.com/github/aureooms/js-sat/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-sat/main.svg)](https://codecov.io/gh/aureooms/js-sat)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-sat.svg)](https://codeclimate.com/github/aureooms/js-sat/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-sat/badge.svg)](https://aureooms.github.io/js-sat/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-sat)](https://bundlephobia.com/result?p=@aureooms/js-sat)

## :scroll: Reference

  - [Simple solver in Python](http://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html)
  - [SATLIB](http://www.cs.ubc.ca/~hoos/SATLIB/benchm.html)
