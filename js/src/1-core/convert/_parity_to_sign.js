
const _parity_to_sign = function ( clauses ) {

	return [ for ( clause of clauses ) [ for ( literal of clause ) literal & 1 ? -( literal >>> 1 ) - 1 : ( literal >>> 1 ) + 1 ] ] ;

} ;
