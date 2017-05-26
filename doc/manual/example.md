# Example

```js

import { lexicographical , increasing } from '@aureooms/js-compare' ;
import { list } from '@aureooms/js-itertools' ;

const lex = lexicographical( increasing ) ;

const instance = sat.from.keys( [
  [ [ 1 , 'A' ] , [ 1 , 'B' ] , [ 0 , 'C' ] ] ,
  [ [ 1 , 'B' ] , [ 1 , 'C' ] ] ,
  [ [ 0 , 'B' ] ],
  [ [ 0 , 'A' ] , [ 1 , 'C' ] ]
] ) ;

const certificates = sat.solve( instance ) ;
const state = certificates.next( ) ;
const certificate = state.value ;
sat.verify( instance , certificate ) ; // true
sat.decide( instance ) ; // true

state.done ; // false

const assignment = instance.assignment( certificate ) ;

list( assignment.entries( ) ).sort( lex ) ; // [ [ 'A' , 1 ] , [ 'B' , 0 ] , [ 'C' , 1 ] ]

certificates.next( ).done ; // true
```


```js
const text = "p cnf 30 4\n10 0 10 20 30\n0\n-10 -20\n-30 0 10 -20 30" ;
const instance = sat.from.dcnf( text ) ;

instance.n ; // 30
instance.clauses ; // [ [ 18 ] , [ 18 , 38 , 58 ] , [ 19 , 39 , 59 ] , [ 18 , 39 , 58 ] ]
```

```js
const filename = 'uf20-010.cnf' ;
const iterable = fs.readFileSync( filename , { encoding : 'utf8' } ) ;

const instance = sat.from.dcnf( iterable ) ;
```
