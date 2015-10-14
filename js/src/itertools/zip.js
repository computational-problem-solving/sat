
function* zip ( ...iterables ) {

	let iterators = [ for ( iterable of iterables ) iterable[Symbol.iterator]( ) ] ;

	if ( iterators.length === 0 ) return ;

	while ( true ) {

		let buffer = [ ] ;

		for ( let result of map( next , iterators ) ) {

			if ( result.done ) return ;

			buffer.push( result.value ) ;

		}

		yield buffer ;

	}

}

exports.zip = zip ;
