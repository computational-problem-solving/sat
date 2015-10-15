
class KeysInstance {

	constructor ( variables , clauses ) {
		this.variables = variables ;
		this.clauses = clauses ;
		this.n = this.variables.length ;
	}

	assignment ( certificate ) {
		return _certificate_to_keys( this.variables , certificate ) ;
	}

}
