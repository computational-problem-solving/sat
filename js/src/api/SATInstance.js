class SATInstance {

    constructor ( ) {
        this.variables = [ ] ;
		this.variable_table = new Map( ) ;
        this.clauses = [ ] ;
	}


    parse_and_add_clause ( line ) {

        let clause = new Set( ) ;

        for ( let literal of line.split( ' ' ) ) {

            let negated = literal.startsWith('~') ? 1 : 0 ;
            let variable = literal.slice( negated ) ;

            if ( !this.variable_table.has( variable ) ) {
                this.variable_table.set( variable , this.variables.length ) ;
                this.variables.push( variable ) ;
			}

            let encoded_literal = this.variable_table.get( variable ) << 1 | negated ;
            clause.add( encoded_literal ) ;

		}

        this.clauses.push( [ ...clause ] ) ;
	}

    literal_to_string ( literal ) {
        let s = literal & 1 ? '~' : '' ;
        return s + this.variables[ literal >> 1 ] ;
	}

    clause_to_string ( clause ) {
        return [ for ( l of clause ) this.literal_to_string(l) ].join( ' ' ) ;
	}

    assignment_to_string ( assignment , brief = false , starting_with = '' ) {

        let literals = [ ] ;

        for ( let [ a , v ] of zip( assignment , this.variables ) ) {

            if ( !v.startsWith( starting_with ) ) continue ;
            if ( a === 0 && !brief ) literals.push( '~' + v ) ;
			else if ( a ) literals.push( v ) ;

		}

        return literals.join( ' ' ) ;

	}

	*solve ( ) {

		for ( const assignment of _solve( this , setup_watchlist( this ) , makeassignment( this ) , 0 ) ) {

			yield zip( this.variables , assignment.slice( ) ) ;

		}

	}

}

exports.SATInstance = SATInstance ;
