import { solve } from './solve' ;

export function decide ( instance ) {

	return !solve( instance ).next( ).done ;

}

