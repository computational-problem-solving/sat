import { list , map } from '@aureooms/js-itertools' ;

export function _sign_to_parity ( clauses ) {

	return new SignsInstance(
		list(map(
			clause => list(map(
				literal => literal > 0 ? ( literal - 1 ) << 1 : ( ( -literal - 1 ) << 1 ) | 1 ,
				clause
			)
		), clauses))
	);

}
