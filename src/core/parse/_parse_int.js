/**
 * _parse_int.
 *
 * @param {string} first_symbol
 * @param {Iterator<string>} iterator
 * @return {[boolean, number]}
 */
export default function _parse_int(first_symbol, iterator) {
	let i = 0;
	let s = 1;

	if (first_symbol === '-') s = -1;
	else i = Number(first_symbol);

	while (true) {
		const current = iterator.next();
		if (current.done) return [true, s * i];

		const c = current.value;

		if (c < '0' || c > '9') return [false, s * i];

		i *= 10;
		i += Number(c);
	}
}
