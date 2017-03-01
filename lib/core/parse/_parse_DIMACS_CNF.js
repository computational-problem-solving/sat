'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._skip_blanks = _skip_blanks;
exports._parse_int = _parse_int;
exports._parse_DIMACS_CNF = _parse_DIMACS_CNF;
function _skip_blanks(iterator) {

	while (true) {
		var current = iterator.next();
		if (current.done) return [true, null];

		switch (current.value) {
			case ' ':
			case '\t':
			case '\n':
				continue;
			// HANDLE CUSTOM DELIMITER OF SATLIB
			case '%':
				return [true, null];
		}

		return [false, current.value];
	}
}

function _parse_int(first_symbol, iterator) {

	var i = 0;
	var s = 1;

	if (first_symbol === '-') s = -1;else i = +first_symbol;

	while (true) {

		var current = iterator.next();
		if (current.done) return [true, s * i];

		var c = current.value;

		if (c < '0' || c > '9') return [false, s * i];

		i *= 10;
		i += +c;
	}
}

function _parse_DIMACS_CNF(iterable) {

	var iterator = iterable[Symbol.iterator]();

	var clauses = [];

	// skip comments
	while (true) {

		var current = iterator.next();

		if (current.done) return clauses;

		var c = current.value;

		// go to problem description
		if (c === 'p') break;

		// skip comment
		while (true) {

			var _current = iterator.next();

			if (_current.done) return clauses;

			// end of comment
			if (_current.value === '\n') break;
		}
	}

	// parse problem description
	// ( we do not actually need to parse it if we suppose it is correct )

	while (true) {

		var _current2 = iterator.next();

		if (_current2.done) return clauses;

		// end of description
		if (_current2.value === '\n') break;
	}

	// parse problem

	loop: while (true) {

		var clause = [];

		while (true) {
			var _skip_blanks2 = _skip_blanks(iterator),
			    _skip_blanks3 = _slicedToArray(_skip_blanks2, 2),
			    done1 = _skip_blanks3[0],
			    symbol = _skip_blanks3[1];

			if (done1) {
				if (clause.length > 0) clauses.push(clause);
				return clauses;
			}

			var _parse_int2 = _parse_int(symbol, iterator),
			    _parse_int3 = _slicedToArray(_parse_int2, 2),
			    done2 = _parse_int3[0],
			    i = _parse_int3[1];

			if (i === 0) {
				if (done2) return clauses;
				clauses.push(clause);
				continue loop;
			}

			clause.push(i > 0 ? i - 1 << 1 : -i - 1 << 1 | 1);

			if (done2) {
				clauses.push(clause);
				return clauses;
			}
		}
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3BhcnNlL19wYXJzZV9ESU1BQ1NfQ05GLmpzIl0sIm5hbWVzIjpbIl9za2lwX2JsYW5rcyIsIl9wYXJzZV9pbnQiLCJfcGFyc2VfRElNQUNTX0NORiIsIml0ZXJhdG9yIiwiY3VycmVudCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJmaXJzdF9zeW1ib2wiLCJpIiwicyIsImMiLCJpdGVyYWJsZSIsIlN5bWJvbCIsImNsYXVzZXMiLCJsb29wIiwiY2xhdXNlIiwiZG9uZTEiLCJzeW1ib2wiLCJsZW5ndGgiLCJwdXNoIiwiZG9uZTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQ2dCQSxZLEdBQUFBLFk7UUFxQkFDLFUsR0FBQUEsVTtRQXdCQUMsaUIsR0FBQUEsaUI7QUE3Q1QsU0FBU0YsWUFBVCxDQUF3QkcsUUFBeEIsRUFBbUM7O0FBRXpDLFFBQVEsSUFBUixFQUFlO0FBQ2QsTUFBTUMsVUFBVUQsU0FBU0UsSUFBVCxFQUFoQjtBQUNBLE1BQUtELFFBQVFFLElBQWIsRUFBb0IsT0FBTyxDQUFFLElBQUYsRUFBUyxJQUFULENBQVA7O0FBRXBCLFVBQVNGLFFBQVFHLEtBQWpCO0FBQ0MsUUFBSyxHQUFMO0FBQ0EsUUFBSyxJQUFMO0FBQ0EsUUFBSyxJQUFMO0FBQ0M7QUFDRDtBQUNBLFFBQUssR0FBTDtBQUNDLFdBQU8sQ0FBRSxJQUFGLEVBQVMsSUFBVCxDQUFQO0FBUEY7O0FBVUEsU0FBTyxDQUFFLEtBQUYsRUFBVUgsUUFBUUcsS0FBbEIsQ0FBUDtBQUNBO0FBRUQ7O0FBRU0sU0FBU04sVUFBVCxDQUFzQk8sWUFBdEIsRUFBcUNMLFFBQXJDLEVBQWdEOztBQUV0RCxLQUFJTSxJQUFJLENBQVI7QUFDQSxLQUFJQyxJQUFJLENBQVI7O0FBRUEsS0FBS0YsaUJBQWlCLEdBQXRCLEVBQTRCRSxJQUFJLENBQUMsQ0FBTCxDQUE1QixLQUNLRCxJQUFJLENBQUNELFlBQUw7O0FBRUwsUUFBUSxJQUFSLEVBQWU7O0FBRWQsTUFBTUosVUFBVUQsU0FBU0UsSUFBVCxFQUFoQjtBQUNBLE1BQUtELFFBQVFFLElBQWIsRUFBb0IsT0FBTyxDQUFFLElBQUYsRUFBU0ksSUFBSUQsQ0FBYixDQUFQOztBQUVwQixNQUFNRSxJQUFJUCxRQUFRRyxLQUFsQjs7QUFFQSxNQUFLSSxJQUFJLEdBQUosSUFBV0EsSUFBSSxHQUFwQixFQUEwQixPQUFPLENBQUUsS0FBRixFQUFVRCxJQUFJRCxDQUFkLENBQVA7O0FBRTFCQSxPQUFLLEVBQUw7QUFDQUEsT0FBSyxDQUFDRSxDQUFOO0FBRUE7QUFFRDs7QUFFTSxTQUFTVCxpQkFBVCxDQUE2QlUsUUFBN0IsRUFBd0M7O0FBRTlDLEtBQU1ULFdBQVdTLFNBQVNDLE9BQU9WLFFBQWhCLEdBQWpCOztBQUVBLEtBQU1XLFVBQVUsRUFBaEI7O0FBRUE7QUFDQSxRQUFRLElBQVIsRUFBZTs7QUFFZCxNQUFNVixVQUFVRCxTQUFTRSxJQUFULEVBQWhCOztBQUVBLE1BQUtELFFBQVFFLElBQWIsRUFBb0IsT0FBT1EsT0FBUDs7QUFFcEIsTUFBTUgsSUFBSVAsUUFBUUcsS0FBbEI7O0FBRUE7QUFDQSxNQUFLSSxNQUFNLEdBQVgsRUFBaUI7O0FBRWpCO0FBQ0EsU0FBUSxJQUFSLEVBQWU7O0FBRWQsT0FBTVAsV0FBVUQsU0FBU0UsSUFBVCxFQUFoQjs7QUFFQSxPQUFLRCxTQUFRRSxJQUFiLEVBQW9CLE9BQU9RLE9BQVA7O0FBRXBCO0FBQ0EsT0FBS1YsU0FBUUcsS0FBUixLQUFrQixJQUF2QixFQUE4QjtBQUU5QjtBQUVEOztBQUVEO0FBQ0E7O0FBRUEsUUFBUSxJQUFSLEVBQWU7O0FBRWQsTUFBTUgsWUFBVUQsU0FBU0UsSUFBVCxFQUFoQjs7QUFFQSxNQUFLRCxVQUFRRSxJQUFiLEVBQW9CLE9BQU9RLE9BQVA7O0FBRXBCO0FBQ0EsTUFBS1YsVUFBUUcsS0FBUixLQUFrQixJQUF2QixFQUE4QjtBQUU5Qjs7QUFFRDs7QUFFQVEsT0FBTyxPQUFRLElBQVIsRUFBZTs7QUFFckIsTUFBTUMsU0FBUyxFQUFmOztBQUVBLFNBQVEsSUFBUixFQUFlO0FBQUEsdUJBRWFoQixhQUFjRyxRQUFkLENBRmI7QUFBQTtBQUFBLE9BRU5jLEtBRk07QUFBQSxPQUVFQyxNQUZGOztBQUdkLE9BQUtELEtBQUwsRUFBYTtBQUNaLFFBQUtELE9BQU9HLE1BQVAsR0FBZ0IsQ0FBckIsRUFBeUJMLFFBQVFNLElBQVIsQ0FBY0osTUFBZDtBQUN6QixXQUFPRixPQUFQO0FBQ0E7O0FBTmEscUJBUVFiLFdBQVlpQixNQUFaLEVBQXFCZixRQUFyQixDQVJSO0FBQUE7QUFBQSxPQVFOa0IsS0FSTTtBQUFBLE9BUUVaLENBUkY7O0FBU2QsT0FBS0EsTUFBTSxDQUFYLEVBQWU7QUFDZCxRQUFLWSxLQUFMLEVBQWEsT0FBT1AsT0FBUDtBQUNiQSxZQUFRTSxJQUFSLENBQWNKLE1BQWQ7QUFDQSxhQUFTRCxJQUFUO0FBQ0E7O0FBRURDLFVBQU9JLElBQVAsQ0FBYVgsSUFBSSxDQUFKLEdBQVVBLElBQUksQ0FBTixJQUFhLENBQXJCLEdBQTJCLENBQUNBLENBQUQsR0FBSyxDQUFQLElBQWMsQ0FBZCxHQUFrQixDQUF4RDs7QUFFQSxPQUFLWSxLQUFMLEVBQWE7QUFDWlAsWUFBUU0sSUFBUixDQUFjSixNQUFkO0FBQ0EsV0FBT0YsT0FBUDtBQUNBO0FBRUQ7QUFFRDtBQUVEIiwiZmlsZSI6Il9wYXJzZV9ESU1BQ1NfQ05GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX3NraXBfYmxhbmtzICggaXRlcmF0b3IgKSB7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiBbIHRydWUgLCBudWxsIF0gO1xuXG5cdFx0c3dpdGNoICggY3VycmVudC52YWx1ZSApIHtcblx0XHRcdGNhc2UgJyAnIDpcblx0XHRcdGNhc2UgJ1xcdCcgOlxuXHRcdFx0Y2FzZSAnXFxuJyA6XG5cdFx0XHRcdGNvbnRpbnVlIDtcblx0XHRcdC8vIEhBTkRMRSBDVVNUT00gREVMSU1JVEVSIE9GIFNBVExJQlxuXHRcdFx0Y2FzZSAnJScgOlxuXHRcdFx0XHRyZXR1cm4gWyB0cnVlICwgbnVsbCBdIDtcblx0XHR9XG5cblx0XHRyZXR1cm4gWyBmYWxzZSAsIGN1cnJlbnQudmFsdWUgXSA7XG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlX2ludCAoIGZpcnN0X3N5bWJvbCAsIGl0ZXJhdG9yICkge1xuXG5cdGxldCBpID0gMCA7XG5cdGxldCBzID0gMSA7XG5cblx0aWYgKCBmaXJzdF9zeW1ib2wgPT09ICctJyApIHMgPSAtMSA7XG5cdGVsc2UgaSA9ICtmaXJzdF9zeW1ib2wgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiBbIHRydWUgLCBzICogaSBdIDtcblxuXHRcdGNvbnN0IGMgPSBjdXJyZW50LnZhbHVlIDtcblxuXHRcdGlmICggYyA8ICcwJyB8fCBjID4gJzknICkgcmV0dXJuIFsgZmFsc2UgLCBzICogaSBdIDtcblxuXHRcdGkgKj0gMTAgO1xuXHRcdGkgKz0gK2MgO1xuXG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gX3BhcnNlX0RJTUFDU19DTkYgKCBpdGVyYWJsZSApIHtcblxuXHRjb25zdCBpdGVyYXRvciA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oICkgO1xuXG5cdGNvbnN0IGNsYXVzZXMgPSBbIF0gO1xuXG5cdC8vIHNraXAgY29tbWVudHNcblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgY3VycmVudCA9IGl0ZXJhdG9yLm5leHQoICkgO1xuXG5cdFx0aWYgKCBjdXJyZW50LmRvbmUgKSByZXR1cm4gY2xhdXNlcyA7XG5cblx0XHRjb25zdCBjID0gY3VycmVudC52YWx1ZSA7XG5cblx0XHQvLyBnbyB0byBwcm9ibGVtIGRlc2NyaXB0aW9uXG5cdFx0aWYgKCBjID09PSAncCcgKSBicmVhayA7XG5cblx0XHQvLyBza2lwIGNvbW1lbnRcblx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCApIDtcblxuXHRcdFx0aWYgKCBjdXJyZW50LmRvbmUgKSByZXR1cm4gY2xhdXNlcyA7XG5cblx0XHRcdC8vIGVuZCBvZiBjb21tZW50XG5cdFx0XHRpZiAoIGN1cnJlbnQudmFsdWUgPT09ICdcXG4nICkgYnJlYWsgO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyBwYXJzZSBwcm9ibGVtIGRlc2NyaXB0aW9uXG5cdC8vICggd2UgZG8gbm90IGFjdHVhbGx5IG5lZWQgdG8gcGFyc2UgaXQgaWYgd2Ugc3VwcG9zZSBpdCBpcyBjb3JyZWN0IClcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCBjdXJyZW50ID0gaXRlcmF0b3IubmV4dCggKSA7XG5cblx0XHRpZiAoIGN1cnJlbnQuZG9uZSApIHJldHVybiBjbGF1c2VzIDtcblxuXHRcdC8vIGVuZCBvZiBkZXNjcmlwdGlvblxuXHRcdGlmICggY3VycmVudC52YWx1ZSA9PT0gJ1xcbicgKSBicmVhayA7XG5cblx0fVxuXG5cdC8vIHBhcnNlIHByb2JsZW1cblxuXHRsb29wIDogd2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgY2xhdXNlID0gWyBdIDtcblxuXHRcdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdFx0Y29uc3QgWyBkb25lMSAsIHN5bWJvbCBdID0gX3NraXBfYmxhbmtzKCBpdGVyYXRvciApIDtcblx0XHRcdGlmICggZG9uZTEgKSB7XG5cdFx0XHRcdGlmICggY2xhdXNlLmxlbmd0aCA+IDAgKSBjbGF1c2VzLnB1c2goIGNsYXVzZSApIDtcblx0XHRcdFx0cmV0dXJuIGNsYXVzZXMgO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbIGRvbmUyICwgaSBdID0gX3BhcnNlX2ludCggc3ltYm9sICwgaXRlcmF0b3IgKSA7XG5cdFx0XHRpZiAoIGkgPT09IDAgKSB7XG5cdFx0XHRcdGlmICggZG9uZTIgKSByZXR1cm4gY2xhdXNlcyA7XG5cdFx0XHRcdGNsYXVzZXMucHVzaCggY2xhdXNlICkgO1xuXHRcdFx0XHRjb250aW51ZSBsb29wIDtcblx0XHRcdH1cblxuXHRcdFx0Y2xhdXNlLnB1c2goIGkgPiAwID8gKCBpIC0gMSApIDw8IDEgOiAoIC1pIC0gMSApIDw8IDEgfCAxICkgO1xuXG5cdFx0XHRpZiAoIGRvbmUyICkge1xuXHRcdFx0XHRjbGF1c2VzLnB1c2goIGNsYXVzZSApIDtcblx0XHRcdFx0cmV0dXJuIGNsYXVzZXMgO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19