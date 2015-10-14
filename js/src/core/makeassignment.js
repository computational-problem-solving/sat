function makeassignment ( instance ) {

	const len = instance.variables.length ;

	const assignment = new Array( instance.variables.length ) ;

	for ( let i = 0 ; i < len ; ++i ) assignment[i] = -1 ;

	return assignment ;

}
