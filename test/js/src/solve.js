
var compare = require( 'aureooms-js-compare' ) ;
var itertools = require( 'aureooms-js-itertools' ) ;

var lex = compare.lexicographical( compare.increasing ) ;
var list = itertools.list ;

test( 'solve 1' , function ( assert ) {

	var instance = new sat.SATInstance( ) ;
	instance.parse_and_add_clause( 'A B ~C' ) ;
	instance.parse_and_add_clause( 'B C' ) ;
	instance.parse_and_add_clause( '~B' ) ;
	instance.parse_and_add_clause( '~A C' ) ;

	var solutions = instance.solve( ) ;
	var state = solutions.next( ) ;

	assert.ok( !state.done ) ;

	var assignment = list( state.value ) ;

	assert.ok( solutions.next( ).done ) ;

	assert.deepEqual( assignment.sort( lex ) , [ [ 'A' , 1 ] , [ 'B' , 0 ] , [ 'C' , 1 ] ] ) ;

} ) ;

test( 'solve 2' , function ( assert ) {

	var instance = new sat.SATInstance( ) ;
	instance.parse_and_add_clause( 'x x y' ) ;
	instance.parse_and_add_clause( '~x ~y ~y' ) ;
	instance.parse_and_add_clause( '~x y y' ) ;

	var solutions = instance.solve( ) ;
	var state = solutions.next( ) ;

	assert.ok( !state.done ) ;

	var assignment = list( state.value ) ;

	assert.ok( solutions.next( ).done ) ;

	assert.deepEqual( assignment.sort( lex ) , [ [ 'x' , 0 ] , [ 'y' , 1 ] ] ) ;

} ) ;

test( 'solve 3' , function ( assert ) {

	var instance = new sat.SATInstance( ) ;
	instance.parse_and_add_clause( '~2 17 3' ) ;
	instance.parse_and_add_clause( '~2 ~4 3' ) ;
	instance.parse_and_add_clause( '~15 1 ~8' ) ;
	instance.parse_and_add_clause( '~9 ~16 ~1' ) ;
	instance.parse_and_add_clause( '9 ~5 14' ) ;
	instance.parse_and_add_clause( '~9 14 20' ) ;
	instance.parse_and_add_clause( '19 8 5' ) ;
	instance.parse_and_add_clause( '~4 ~15 2' ) ;
	instance.parse_and_add_clause( '5 ~1 ~3' ) ;
	instance.parse_and_add_clause( '~1 ~6 ~4' ) ;
	instance.parse_and_add_clause( '~18 ~3 ~10' ) ;
	instance.parse_and_add_clause( '19 ~13 4' ) ;
	instance.parse_and_add_clause( '5 17 ~19' ) ;
	instance.parse_and_add_clause( '~14 12 ~17' ) ;
	instance.parse_and_add_clause( '~18 13 ~20' ) ;
	instance.parse_and_add_clause( '9 8 5' ) ;
	instance.parse_and_add_clause( '4 14 ~7' ) ;
	instance.parse_and_add_clause( '3 ~6 17' ) ;
	instance.parse_and_add_clause( '~2 ~8 7' ) ;
	instance.parse_and_add_clause( '16 ~8 ~2' ) ;
	instance.parse_and_add_clause( '~15 1 2' ) ;
	instance.parse_and_add_clause( '4 17 ~5' ) ;
	instance.parse_and_add_clause( '~1 ~6 ~18' ) ;
	instance.parse_and_add_clause( '~7 ~17 ~2' ) ;
	instance.parse_and_add_clause( '~16 ~11 ~5' ) ;
	instance.parse_and_add_clause( '~14 ~13 19' ) ;
	instance.parse_and_add_clause( '16 ~17 ~1' ) ;
	instance.parse_and_add_clause( '6 5 10' ) ;
	instance.parse_and_add_clause( '8 ~17 5' ) ;
	instance.parse_and_add_clause( '~16 4 6' ) ;
	instance.parse_and_add_clause( '6 13 2' ) ;
	instance.parse_and_add_clause( '~17 1 ~19' ) ;
	instance.parse_and_add_clause( '~9 ~11 4' ) ;
	instance.parse_and_add_clause( '1 ~20 6' ) ;
	instance.parse_and_add_clause( '~16 ~14 ~8' ) ;
	instance.parse_and_add_clause( '~10 ~18 ~15' ) ;
	instance.parse_and_add_clause( '~15 ~19 ~8' ) ;
	instance.parse_and_add_clause( '11 1 ~14' ) ;
	instance.parse_and_add_clause( '3 ~5 20' ) ;
	instance.parse_and_add_clause( '18 13 ~1' ) ;
	instance.parse_and_add_clause( '~19 ~15 14' ) ;
	instance.parse_and_add_clause( '8 ~14 11' ) ;
	instance.parse_and_add_clause( '18 ~12 ~20' ) ;
	instance.parse_and_add_clause( '3 ~1 14' ) ;
	instance.parse_and_add_clause( '3 ~11 ~1' ) ;
	instance.parse_and_add_clause( '~7 ~19 13' ) ;
	instance.parse_and_add_clause( '~4 20 ~1' ) ;
	instance.parse_and_add_clause( '1 5 ~4' ) ;
	instance.parse_and_add_clause( '14 ~8 ~19' ) ;
	instance.parse_and_add_clause( '8 15 7' ) ;
	instance.parse_and_add_clause( '~6 9 ~4' ) ;
	instance.parse_and_add_clause( '6 12 15' ) ;
	instance.parse_and_add_clause( '18 8 6' ) ;
	instance.parse_and_add_clause( '~20 2 17' ) ;
	instance.parse_and_add_clause( '15 16 4' ) ;
	instance.parse_and_add_clause( '~7 10 14' ) ;
	instance.parse_and_add_clause( '~6 ~14 1' ) ;
	instance.parse_and_add_clause( '~18 ~7 ~19' ) ;
	instance.parse_and_add_clause( '16 14 ~18' ) ;
	instance.parse_and_add_clause( '19 6 14' ) ;
	instance.parse_and_add_clause( '13 4 ~11' ) ;
	instance.parse_and_add_clause( '~15 ~19 ~17' ) ;
	instance.parse_and_add_clause( '~12 5 11' ) ;
	instance.parse_and_add_clause( '~14 ~15 8' ) ;
	instance.parse_and_add_clause( '~16 ~2 ~15' ) ;
	instance.parse_and_add_clause( '~11 ~15 6' ) ;
	instance.parse_and_add_clause( '~5 ~18 ~20' ) ;
	instance.parse_and_add_clause( '11 ~20 2' ) ;
	instance.parse_and_add_clause( '~12 11 ~17' ) ;
	instance.parse_and_add_clause( '~20 ~3 14' ) ;
	instance.parse_and_add_clause( '~9 11 ~20' ) ;
	instance.parse_and_add_clause( '~17 6 ~16' ) ;
	instance.parse_and_add_clause( '~13 ~16 11' ) ;
	instance.parse_and_add_clause( '~18 10 19' ) ;
	instance.parse_and_add_clause( '7 9 8' ) ;
	instance.parse_and_add_clause( '6 12 ~18' ) ;
	instance.parse_and_add_clause( '~3 5 19' ) ;
	instance.parse_and_add_clause( '11 6 1' ) ;
	instance.parse_and_add_clause( '~3 12 ~7' ) ;
	instance.parse_and_add_clause( '4 ~9 20' ) ;
	instance.parse_and_add_clause( '~9 3 5' ) ;
	instance.parse_and_add_clause( '~17 12 ~8' ) ;
	instance.parse_and_add_clause( '5 1 3' ) ;
	instance.parse_and_add_clause( '~13 9 ~17' ) ;
	instance.parse_and_add_clause( '11 ~9 ~6' ) ;
	instance.parse_and_add_clause( '17 ~1 19' ) ;
	instance.parse_and_add_clause( '~5 11 20' ) ;
	instance.parse_and_add_clause( '~10 ~11 ~9' ) ;
	instance.parse_and_add_clause( '~18 9 3' ) ;
	instance.parse_and_add_clause( '~11 18 16' ) ;
	instance.parse_and_add_clause( '~12 5 9' ) ;

	var solutions = instance.solve( ) ;
	var state = solutions.next( ) ;

	assert.ok( !state.done ) ;

} ) ;
