
const _parity_to_keys = function ( variables , clauses ) {

	return [ for ( clause of clauses ) [ for ( literal of clause ) [ !(literal & 1) , variables[ literal >>> 1 ] ] ] ] ;

} ;
