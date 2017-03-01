'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._sign_to_parity = _sign_to_parity;

var _jsItertools = require('@aureooms/js-itertools');

function _sign_to_parity(clauses) {

	return new SignsInstance((0, _jsItertools.list)((0, _jsItertools.map)(function (clause) {
		return (0, _jsItertools.list)((0, _jsItertools.map)(function (literal) {
			return literal > 0 ? literal - 1 << 1 : -literal - 1 << 1 | 1;
		}, clause));
	}, clauses)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX3NpZ25fdG9fcGFyaXR5LmpzIl0sIm5hbWVzIjpbIl9zaWduX3RvX3Bhcml0eSIsImNsYXVzZXMiLCJTaWduc0luc3RhbmNlIiwibGl0ZXJhbCIsImNsYXVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLGUsR0FBQUEsZTs7QUFGaEI7O0FBRU8sU0FBU0EsZUFBVCxDQUEyQkMsT0FBM0IsRUFBcUM7O0FBRTNDLFFBQU8sSUFBSUMsYUFBSixDQUNOLHVCQUFLLHNCQUNKO0FBQUEsU0FBVSx1QkFBSyxzQkFDZDtBQUFBLFVBQVdDLFVBQVUsQ0FBVixHQUFnQkEsVUFBVSxDQUFaLElBQW1CLENBQWpDLEdBQXlDLENBQUNBLE9BQUQsR0FBVyxDQUFiLElBQW9CLENBQXRCLEdBQTRCLENBQTVFO0FBQUEsR0FEYyxFQUVkQyxNQUZjLENBQUwsQ0FBVjtBQUFBLEVBREksRUFLRkgsT0FMRSxDQUFMLENBRE0sQ0FBUDtBQVNBIiwiZmlsZSI6Il9zaWduX3RvX3Bhcml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBtYXAgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBfc2lnbl90b19wYXJpdHkgKCBjbGF1c2VzICkge1xuXG5cdHJldHVybiBuZXcgU2lnbnNJbnN0YW5jZShcblx0XHRsaXN0KG1hcChcblx0XHRcdGNsYXVzZSA9PiBsaXN0KG1hcChcblx0XHRcdFx0bGl0ZXJhbCA9PiBsaXRlcmFsID4gMCA/ICggbGl0ZXJhbCAtIDEgKSA8PCAxIDogKCAoIC1saXRlcmFsIC0gMSApIDw8IDEgKSB8IDEgLFxuXHRcdFx0XHRjbGF1c2Vcblx0XHRcdClcblx0XHQpLCBjbGF1c2VzKSlcblx0KTtcblxufVxuIl19