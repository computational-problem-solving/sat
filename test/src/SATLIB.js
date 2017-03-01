import test from 'ava';
import * as sat from '../../src';

import compare from '@aureooms/js-compare' ;
import { list } from '@aureooms/js-itertools' ;

import fs from 'fs' ;

const lex = compare.lexicographical( compare.increasing ) ;

function T ( name , satisfiable ) {

	test( name , t => {

		var filename = './test/data/' + name + '.cnf' ;
		var iterable = fs.readFileSync( filename , { encoding : 'utf8' } ) ;

		var instance = sat.from.dcnf( iterable ) ;

		if ( !satisfiable ) {
			t.truthy( !sat.decide( instance ) ) ;
		}

		else {
			t.truthy( sat.decide( instance ) ) ;
			var certificate = sat.solve( instance ).next( ).value ;
			if ( !certificate ) t.truthy( false , 'missing certificate' ) ;
			else t.truthy( sat.verify( instance , certificate ) ) ;
		}

	} ) ;
}

T( 'uf20-01' , 1 ) ;
T( 'uf20-02' , 1 ) ;
T( 'uf20-03' , 1 ) ;
T( 'uf20-04' , 1 ) ;
T( 'uf20-05' , 1 ) ;
T( 'uf20-06' , 1 ) ;
T( 'uf20-07' , 1 ) ;
T( 'uf20-08' , 1 ) ;
T( 'uf20-09' , 1 ) ;
T( 'uf20-010' , 1 ) ;
