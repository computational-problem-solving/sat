import test from 'ava';
import * as sat from '../../src';

import compare from '@aureooms/js-compare' ;
import { list } from '@aureooms/js-itertools' ;

const lex = compare.lexicographical( compare.increasing ) ;

test( '#1' , t => {

	var instance = sat.from.keys( [
		[ [ 1 , 'x' ] , [ 1 , 'x' ] , [ 1 , 'y' ] ] ,
		[ [ 0 , 'x' ] , [ 0 , 'y' ] , [ 0 , 'y' ] ] ,
		[ [ 0 , 'x' ] , [ 1 , 'y' ] , [ 1 , 'y' ] ]
	] ) ;

	var solutions = sat.solve( instance ) ;
	var state = solutions.next( ) ;
	t.truthy( sat.verify( instance , state.value ) ) ;
	t.truthy( sat.decide( instance ) ) ;

	t.truthy( !state.done ) ;

	var assignment = instance.assignment( state.value ) ;

	t.truthy( solutions.next( ).done ) ;

	t.deepEqual( list( assignment.entries( ) ).sort( lex ) , [ [ 'x' , 0 ] , [ 'y' , 1 ] ] ) ;


} ) ;

test( '#2' , t => {

	var instance = sat.from.keys( [
		[ [ 1 , 'A' ] , [ 1 , 'B' ] , [ 0 , 'C' ] ] ,
		[ [ 1 , 'B' ] , [ 1 , 'C' ] ] ,
		[ [ 0 , 'B' ] ],
		[ [ 0 , 'A' ] , [ 1 , 'C' ] ]
	] ) ;

	var solutions = sat.solve( instance ) ;
	var state = solutions.next( ) ;
	t.truthy( sat.verify( instance , state.value ) ) ;
	t.truthy( sat.decide( instance ) ) ;

	t.truthy( !state.done ) ;

	var assignment = instance.assignment( state.value ) ;

	t.truthy( solutions.next( ).done ) ;

	t.deepEqual( list( assignment.entries( ) ).sort( lex ) , [ [ 'A' , 1 ] , [ 'B' , 0 ] , [ 'C' , 1 ] ] ) ;

} ) ;
