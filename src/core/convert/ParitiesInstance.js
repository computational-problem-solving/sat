import { _count } from './_count' ;

export class ParitiesInstance {

	constructor ( clauses ) {
		this.clauses = clauses ;
		this.n = _count( clauses ) ;
	}

	assignment ( certificate ) {
		return certificate.slice( ) ;
	}

}
