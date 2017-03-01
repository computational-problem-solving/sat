[@aureooms/js-sat](https://aureooms.github.io/js-sat)
==

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

[![License](https://img.shields.io/github/license/aureooms/js-sat.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-sat/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-sat.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-sat)
[![Build Status](https://img.shields.io/travis/aureooms/js-sat.svg?style=flat)](https://travis-ci.org/aureooms/js-sat)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-sat.svg?style=flat)](https://coveralls.io/r/aureooms/js-sat)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-sat.svg?style=flat)](https://david-dm.org/aureooms/js-sat#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-sat.svg?style=flat)](https://david-dm.org/aureooms/js-sat#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-sat.svg?style=flat)](https://codeclimate.com/github/aureooms/js-sat)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-sat.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-sat)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-sat.svg?style=flat)](https://github.com/aureooms/js-sat/issues)
[![Documentation](https://aureooms.github.io/js-sat/badge.svg)](https://aureooms.github.io/js-sat/source.html)

## Reference

  - [Simple solver in Python](http://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html)
  - [SATLIB](http://www.cs.ubc.ca/~hoos/SATLIB/benchm.html)
