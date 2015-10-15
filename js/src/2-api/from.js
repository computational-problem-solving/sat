
exports.from = {
	parities : ( clauses ) => new ParitiesInstance( clauses ) ,
	signs : _sign_to_parity ,
	keys : _keys_to_parity
} ;
