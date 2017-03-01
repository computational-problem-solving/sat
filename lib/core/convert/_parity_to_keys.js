'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._parity_to_keys = _parity_to_keys;

var _jsItertools = require('@aureooms/js-itertools');

function _parity_to_keys(variables, clauses) {

	return (0, _jsItertools.list)((0, _jsItertools.map)(function (clause) {
		return (0, _jsItertools.list)((0, _jsItertools.map)(function (literal) {
			return [!(literal & 1), variables[literal >>> 1]];
		}, clause));
	}, clauses));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnZlcnQvX3Bhcml0eV90b19rZXlzLmpzIl0sIm5hbWVzIjpbIl9wYXJpdHlfdG9fa2V5cyIsInZhcmlhYmxlcyIsImNsYXVzZXMiLCJsaXRlcmFsIiwiY2xhdXNlIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsZSxHQUFBQSxlOztBQUZoQjs7QUFFTyxTQUFTQSxlQUFULENBQTJCQyxTQUEzQixFQUF1Q0MsT0FBdkMsRUFBaUQ7O0FBRXZELFFBQU8sdUJBQUssc0JBQUk7QUFBQSxTQUFVLHVCQUFLLHNCQUFLO0FBQUEsVUFBVyxDQUFFLEVBQUVDLFVBQVUsQ0FBWixDQUFGLEVBQW1CRixVQUFXRSxZQUFZLENBQXZCLENBQW5CLENBQVg7QUFBQSxHQUFMLEVBQWtFQyxNQUFsRSxDQUFMLENBQVY7QUFBQSxFQUFKLEVBQWdHRixPQUFoRyxDQUFMLENBQVA7QUFFQSIsImZpbGUiOiJfcGFyaXR5X3RvX2tleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5leHBvcnQgZnVuY3Rpb24gX3Bhcml0eV90b19rZXlzICggdmFyaWFibGVzICwgY2xhdXNlcyApIHtcblxuXHRyZXR1cm4gbGlzdChtYXAoY2xhdXNlID0+IGxpc3QobWFwKCBsaXRlcmFsID0+IFsgIShsaXRlcmFsICYgMSkgLCB2YXJpYWJsZXNbIGxpdGVyYWwgPj4+IDEgXSBdICwgY2xhdXNlICkpLCBjbGF1c2VzKSkgO1xuXG59XG4iXX0=