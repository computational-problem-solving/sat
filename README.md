[js-sat](http://aureooms.github.io/js-sat)
==

Satisfiability code bricks for JavaScript.

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

[![NPM license](https://img.shields.io/npm/l/@aureooms/js-sat.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-sat/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-sat.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-sat)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-sat.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-sat)
[![Build Status](https://img.shields.io/travis/aureooms/js-sat.svg?style=flat)](https://travis-ci.org/aureooms/js-sat)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-sat.svg?style=flat)](https://coveralls.io/r/aureooms/js-sat)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-sat.svg?style=flat)](https://david-dm.org/aureooms/js-sat#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-sat.svg?style=flat)](https://david-dm.org/aureooms/js-sat#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-sat.svg?style=flat)](https://codeclimate.com/github/aureooms/js-sat)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-sat.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-sat)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-sat.svg?style=flat)](https://github.com/aureooms/js-sat/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-sat.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-sat)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-sat
# or
jspm install npm:@aureooms/js-sat
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-sat
```

### bower
```terminal
bower install @aureooms/js-sat
```

### ender
```terminal
ender add @aureooms/js-sat
```

### jam
```terminal
jam install @aureooms/js-sat
```

### spm
```terminal
spm install @aureooms/js-sat --save
```

### npm
```terminal
npm install @aureooms/js-sat --save
```

## Require
### jspm
```js
let sat = require( "github:aureooms/js-sat" ) ;
// or
import sat from '@aureooms/js-sat' ;
```
### duo
```js
let sat = require( "aureooms/js-sat" ) ;
```

### component, ender, spm, npm
```js
let sat = require( "@aureooms/js-sat" ) ;
```

### bower
The script tag exposes the global variable `sat`.
```html
<script src="bower_components/@aureooms/js-sat/js/dist/sat.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-sat" ] , function ( sat ) { ... } ) ;
```

## Reference

  - [Simple solver in Python](http://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html)
  - [SATLIB](http://www.cs.ubc.ca/~hoos/SATLIB/benchm.html)
