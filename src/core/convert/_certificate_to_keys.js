import { zip } from '@aureooms/js-itertools' ;

export function _certificate_to_keys ( variables , certificate ) {

	return new Map( zip( variables , certificate ) ) ;

}
