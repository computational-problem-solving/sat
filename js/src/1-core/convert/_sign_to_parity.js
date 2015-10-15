
const _sign_to_parity = function ( clauses ) {

	return new SignsInstance( [ for ( clause of clauses ) [ for ( literal of clause ) literal > 0 ? ( literal - 1 ) << 1 : ( ( -literal - 1 ) << 1 ) | 1 ] ] ) ;

} ;
