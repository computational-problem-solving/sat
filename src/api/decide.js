import { solve } from "./solve.js" ;

export function decide ( instance ) {

	return !solve( instance ).next( ).done ;

}

