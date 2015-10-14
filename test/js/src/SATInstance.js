
var compare = require( 'aureooms-js-compare' ) ;

var lex = compare.lexicographical( compare.increasing ) ;

test( 'SATInstance' , function ( assert ) {

	var s = new sat.SATInstance( ) ;
	s.parse_and_add_clause( 'A B ~C' ) ;
	assert.deepEqual( s.variables , ['A', 'B', 'C'] ) ;
	assert.deepEqual( sat.list( s.variable_table.entries( ) ).sort( lex ) , [ [ 'A' , 0 ] , [ 'B' , 1 ] , [ 'C' , 2 ] ] ) ;
	assert.deepEqual( s.clauses , [[0, 2, 5]] ) ;

} ) ;
