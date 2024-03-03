/**
 * _skip_blanks.
 *
 * @param {Iterator<string>} iterator
 * @return {[boolean, string]}
 */
export default function _skip_blanks(iterator) {
	while (true) {
		const current = iterator.next();
		if (current.done) return [true, null];

		switch (current.value) {
			case ' ':
			case '\t':
			case '\n': {
				continue;
			}

			// HANDLE CUSTOM DELIMITER OF SATLIB
			case '%': {
				return [true, null];
			}

			default: {
				return [false, current.value];
			}
		}
	}
}
