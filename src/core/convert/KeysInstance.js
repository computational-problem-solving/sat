import { _certificate_to_keys } from "./_certificate_to_keys.js" ;

export class KeysInstance {

	/**
	 * Clauses are in parity format. The variables parameters maps parity
	 * format literals back to variable names.
	 */
	constructor ( variables , clauses ) {
		this.variables = variables ;
		this.clauses = clauses ;
		this.n = this.variables.length ;
	}

	/**
	 * Returns an object that maps each variable name to a variable assignment.
	 */
	assignment ( certificate ) {
		return _certificate_to_keys( this.variables , certificate ) ;
	}

}
