
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

test( '#3' , function ( assert ) {

	var instance = sat.from.signs( [
		[ -2 , 17 , 3 ] ,
		[ -2 , -4 , 3 ] ,
		[ -15 , 1 , -8 ] ,
		[ -9 , -16 , -1 ] ,
		[ 9 , -5 , 14 ] ,
		[ -9 , 14 , 20 ] ,
		[ 19 , 8 , 5 ] ,
		[ -4 , -15 , 2 ] ,
		[ 5 , -1 , -3 ] ,
		[ -1 , -6 , -4 ] ,
		[ -18 , -3 , -10 ] ,
		[ 19 , -13 , 4 ] ,
		[ 5 , 17 , -19 ] ,
		[ -14 , 12 , -17 ] ,
		[ -18 , 13 , -20 ] ,
		[ 9 , 8 , 5 ] ,
		[ 4 , 14 , -7 ] ,
		[ 3 , -6 , 17 ] ,
		[ -2 , -8 , 7 ] ,
		[ 16 , -8 , -2 ] ,
		[ -15 , 1 , 2 ] ,
		[ 4 , 17 , -5 ] ,
		[ -1 , -6 , -18 ] ,
		[ -7 , -17 , -2 ] ,
		[ -16 , -11 , -5 ] ,
		[ -14 , -13 , 19 ] ,
		[ 16 , -17 , -1 ] ,
		[ 6 , 5 , 10 ] ,
		[ 8 , -17 , 5 ] ,
		[ -16 , 4 , 6 ] ,
		[ 6 , 13 , 2 ] ,
		[ -17 , 1 , -19 ] ,
		[ -9 , -11 , 4 ] ,
		[ 1 , -20 , 6 ] ,
		[ -16 , -14 , -8 ] ,
		[ -10 , -18 , -15 ] ,
		[ -15 , -19 , -8 ] ,
		[ 11 , 1 , -14 ] ,
		[ 3 , -5 , 20 ] ,
		[ 18 , 13 , -1 ] ,
		[ -19 , -15 , 14 ] ,
		[ 8 , -14 , 11 ] ,
		[ 18 , -12 , -20 ] ,
		[ 3 , -1 , 14 ] ,
		[ 3 , -11 , -1 ] ,
		[ -7 , -19 , 13 ] ,
		[ -4 , 20 , -1 ] ,
		[ 1 , 5 , -4 ] ,
		[ 14 , -8 , -19 ] ,
		[ 8 , 15 , 7 ] ,
		[ -6 , 9 , -4 ] ,
		[ 6 , 12 , 15 ] ,
		[ 18 , 8 , 6 ] ,
		[ -20 , 2 , 17 ] ,
		[ 15 , 16 , 4 ] ,
		[ -7 , 10 , 14 ] ,
		[ -6 , -14 , 1 ] ,
		[ -18 , -7 , -19 ] ,
		[ 16 , 14 , -18 ] ,
		[ 19 , 6 , 14 ] ,
		[ 13 , 4 , -11 ] ,
		[ -15 , -19 , -17 ] ,
		[ -12 , 5 , 11 ] ,
		[ -14 , -15 , 8 ] ,
		[ -16 , -2 , -15 ] ,
		[ -11 , -15 , 6 ] ,
		[ -5 , -18 , -20 ] ,
		[ 11 , -20 , 2 ] ,
		[ -12 , 11 , -17 ] ,
		[ -20 , -3 , 14 ] ,
		[ -9 , 11 , -20 ] ,
		[ -17 , 6 , -16 ] ,
		[ -13 , -16 , 11 ] ,
		[ -18 , 10 , 19 ] ,
		[ 7 , 9 , 8 ] ,
		[ 6 , 12 , -18 ] ,
		[ -3 , 5 , 19 ] ,
		[ 11 , 6 , 1 ] ,
		[ -3 , 12 , -7 ] ,
		[ 4 , -9 , 20 ] ,
		[ -9 , 3 , 5 ] ,
		[ -17 , 12 , -8 ] ,
		[ 5 , 1 , 3 ] ,
		[ -13 , 9 , -17 ] ,
		[ 11  ,-9 , -6 ] ,
		[ 17 , -1 , 19 ] ,
		[ -5 , 11 , 20 ] ,
		[ -10 , -11 , -9 ] ,
		[ -18 , 9 , 3 ] ,
		[ -11 , 18 , 16 ] ,
		[ -12 , 5 , 9 ]
	] ) ;

	var solutions = sat.solve( instance ) ;
	var state = solutions.next( ) ;
	assert.ok( sat.decide( instance ) ) ;

	assert.ok( !state.done ) ;
	assert.ok( sat.verify( instance , state.value ) ) ;

} ) ;
