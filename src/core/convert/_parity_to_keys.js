import { list , map } from '@aureooms/js-itertools' ;

export function _parity_to_keys ( variables , clauses ) {

	return list(map(clause => list(map( literal => [ !(literal & 1) , variables[ literal >>> 1 ] ] , clause )), clauses)) ;

}
