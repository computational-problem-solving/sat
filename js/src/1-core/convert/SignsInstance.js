
class SignsInstance {

	constructor ( clauses ) {
		this.clauses = clauses ;
		this.n = _count( clauses ) ;
	}

	assignment ( certificate ) {
		return [ 0 ].concat( certificate ) ;
	}

}
