
var compare = require( 'aureooms-js-compare' ) ;
var itertools = require( 'aureooms-js-itertools' ) ;

var lex = compare.lexicographical( compare.increasing ) ;
var list = itertools.list ;

test( '#1' , function ( assert ) {

	var instance = sat.from.keys( [
		[ [ 1 , 'x' ] , [ 1 , 'x' ] , [ 1 , 'y' ] ] ,
		[ [ 0 , 'x' ] , [ 0 , 'y' ] , [ 0 , 'y' ] ] ,
		[ [ 0 , 'x' ] , [ 1 , 'y' ] , [ 1 , 'y' ] ]
	] ) ;

	var solutions = sat.solve( instance ) ;
	var state = solutions.next( ) ;
	assert.ok( sat.verify( instance , state.value ) ) ;
	assert.ok( sat.decide( instance ) ) ;

	assert.ok( !state.done ) ;

	var assignment = instance.assignment( state.value ) ;

	assert.ok( solutions.next( ).done ) ;

	assert.deepEqual( list( assignment.entries( ) ).sort( lex ) , [ [ 'x' , 0 ] , [ 'y' , 1 ] ] ) ;


} ) ;

test( '#2' , function ( assert ) {

	var instance = sat.from.keys( [
		[ [ 1 , 'A' ] , [ 1 , 'B' ] , [ 0 , 'C' ] ] ,
		[ [ 1 , 'B' ] , [ 1 , 'C' ] ] ,
		[ [ 0 , 'B' ] ],
		[ [ 0 , 'A' ] , [ 1 , 'C' ] ]
	] ) ;

	var solutions = sat.solve( instance ) ;
	var state = solutions.next( ) ;
	assert.ok( sat.verify( instance , state.value ) ) ;
	assert.ok( sat.decide( instance ) ) ;

	assert.ok( !state.done ) ;

	var assignment = instance.assignment( state.value ) ;

	assert.ok( solutions.next( ).done ) ;

	assert.deepEqual( list( assignment.entries( ) ).sort( lex ) , [ [ 'A' , 1 ] , [ 'B' , 0 ] , [ 'C' , 1 ] ] ) ;

} ) ;
