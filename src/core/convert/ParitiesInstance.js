import { _count } from './_count' ;

export class ParitiesInstance {

	/**
	 * Clauses are in parity format.
	 */
	constructor ( clauses ) {
		this.clauses = clauses ;
		this.n = _count( clauses ) ;
	}

	/**
	 * Returns assignment vector in parity format.
	 */
	assignment ( certificate ) {
		return certificate.slice( ) ;
	}

}
