
exports.from = {
	parities : ( clauses ) => new ParitiesInstance( clauses ) ,
	signs : _sign_to_parity ,
	keys : _keys_to_parity ,
	dcnf : ( stream ) => new ParitiesInstance( _parse_DIMACS_CNF( stream ) )
} ;
