function* map ( callable , iterable ) {
	for ( const item of iterable ) yield callable( item ) ;
}
