'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._parity_to_sign = _parity_to_sign;

var _jsItertools = require('@aureooms/js-itertools');

function _parity_to_sign(clauses) {

	return (0, _jsItertools.list)((0, _jsItertools.map)(function (clause) {
		return (0, _jsItertools.list)((0, _jsItertools.map)(function (literal) {
			return literal & 1 ? -(literal >>> 1) - 1 : (literal >>> 1) + 1;
		}, clause));
	}, clauses));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX3Bhcml0eV90b19zaWduLmpzIl0sIm5hbWVzIjpbIl9wYXJpdHlfdG9fc2lnbiIsImNsYXVzZXMiLCJsaXRlcmFsIiwiY2xhdXNlIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsZSxHQUFBQSxlOztBQUZoQjs7QUFFTyxTQUFTQSxlQUFULENBQTJCQyxPQUEzQixFQUFxQzs7QUFFM0MsUUFBTyx1QkFBSyxzQkFBSTtBQUFBLFNBQVUsdUJBQUssc0JBQUs7QUFBQSxVQUFXQyxVQUFVLENBQVYsR0FBYyxFQUFHQSxZQUFZLENBQWYsSUFBcUIsQ0FBbkMsR0FBdUMsQ0FBRUEsWUFBWSxDQUFkLElBQW9CLENBQXRFO0FBQUEsR0FBTCxFQUErRUMsTUFBL0UsQ0FBTCxDQUFWO0FBQUEsRUFBSixFQUE2R0YsT0FBN0csQ0FBTCxDQUFQO0FBRUEiLCJmaWxlIjoiX3Bhcml0eV90b19zaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJpdHlfdG9fc2lnbiAoIGNsYXVzZXMgKSB7XG5cblx0cmV0dXJuIGxpc3QobWFwKGNsYXVzZSA9PiBsaXN0KG1hcCggbGl0ZXJhbCA9PiBsaXRlcmFsICYgMSA/IC0oIGxpdGVyYWwgPj4+IDEgKSAtIDEgOiAoIGxpdGVyYWwgPj4+IDEgKSArIDEgLCBjbGF1c2UgKSksIGNsYXVzZXMpKSA7XG5cbn1cbiJdfQ==