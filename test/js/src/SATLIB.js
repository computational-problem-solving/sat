
var compare = require( 'aureooms-js-compare' ) ;
var itertools = require( 'aureooms-js-itertools' ) ;

var lex = compare.lexicographical( compare.increasing ) ;
var list = itertools.list ;

function T ( name , satisfiable ) {

	test( name , function ( assert ) {

		var fs = require( 'fs' ) ;

		var filename = './test/js/data/' + name + '.cnf' ;
		var stream = fs.createReadStream( filename , { encoding : 'utf8' } ) ;

		var iterable = {
			[Symbol.iterator] : function ( ) {
				return {
					next : function ( ) {
						var buf = stream.read( 1 ) ;
						if ( buf === null ) return { done : true } ;
						return { done : false , value : buf } ;
					}
				} ;
			}
		} ;

		expect( satisfiable ? 2 : 1 ) ;
		stop( ) ;

		stream.once( 'readable' , function ( ) {

			var instance = sat.from.dcnf( iterable ) ;

			if ( !satisfiable ) {
				assert.ok( !sat.decide( instance ) ) ;
			}

			else {
				assert.ok( sat.decide( instance ) ) ;
				var certificate = sat.solve( instance ).next( ).value ;
				if ( !certificate ) assert.ok( false , 'missing certificate' ) ;
				else assert.ok( sat.verify( instance , certificate ) ) ;
			}

			start( ) ;

		} ) ;

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
