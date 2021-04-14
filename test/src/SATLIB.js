import test from 'ava';
import * as sat from "../../src/index.js";

import * as compare from '@aureooms/js-compare' ;
import { list } from '@aureooms/js-itertools' ;

import fs from 'fs' ;

const lex = compare.lexicographical( compare.increasing ) ;

function T ( name , satisfiable ) {

	test( name , t => {

		const filename = './test/data/' + name + '.cnf' ;
		const iterable = fs.readFileSync( filename , { encoding : 'utf8' } ) ;

		const instance = sat.from.dcnf( iterable ) ;

		if ( !satisfiable ) {
			t.truthy( !sat.decide( instance ) ) ;
		}

		else {
			t.truthy( sat.decide( instance ) ) ;
			const certificate = sat.solve( instance ).next( ).value ;
			if ( !certificate ) t.fail( 'missing certificate' ) ;
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
