"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.update_watchlist = update_watchlist;
function update_watchlist(watchlist, false_literal, assignment) {

    /**
     * Updates the watch list after literal 'false_literal' was just assigned
     * False, by making any clause watching false_literal watch something else.
     * Returns False it is impossible to do so, meaning a clause is contradicted
     * by the current assignment.
     */
    while (watchlist[false_literal].length) {

        var clause = watchlist[false_literal][watchlist[false_literal].length - 1];
        var found_alternative = false;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = clause[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var alternative = _step.value;


                var v = alternative >>> 1;
                var a = alternative & 1;

                if (assignment[v] === -1 || assignment[v] === a ^ 1) {
                    found_alternative = true;
                    watchlist[false_literal].pop();
                    watchlist[alternative].push(clause);
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (!found_alternative) return false;
    }

    return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL1NBVDBXL3VwZGF0ZV93YXRjaGxpc3QuanMiXSwibmFtZXMiOlsidXBkYXRlX3dhdGNobGlzdCIsIndhdGNobGlzdCIsImZhbHNlX2xpdGVyYWwiLCJhc3NpZ25tZW50IiwibGVuZ3RoIiwiY2xhdXNlIiwiZm91bmRfYWx0ZXJuYXRpdmUiLCJhbHRlcm5hdGl2ZSIsInYiLCJhIiwicG9wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBZ0JBLGdCLEdBQUFBLGdCO0FBQVQsU0FBU0EsZ0JBQVQsQ0FBNEJDLFNBQTVCLEVBQXdDQyxhQUF4QyxFQUF3REMsVUFBeEQsRUFBcUU7O0FBRXhFOzs7Ozs7QUFNQSxXQUFRRixVQUFVQyxhQUFWLEVBQXlCRSxNQUFqQyxFQUEwQzs7QUFFdEMsWUFBSUMsU0FBU0osVUFBVUMsYUFBVixFQUF5QkQsVUFBVUMsYUFBVixFQUF5QkUsTUFBekIsR0FBa0MsQ0FBM0QsQ0FBYjtBQUNBLFlBQUlFLG9CQUFvQixLQUF4Qjs7QUFIc0M7QUFBQTtBQUFBOztBQUFBO0FBS3RDLGlDQUF5QkQsTUFBekIsOEhBQWtDO0FBQUEsb0JBQXhCRSxXQUF3Qjs7O0FBRTlCLG9CQUFJQyxJQUFJRCxnQkFBZ0IsQ0FBeEI7QUFDQSxvQkFBSUUsSUFBSUYsY0FBYyxDQUF0Qjs7QUFFQSxvQkFBS0osV0FBV0ssQ0FBWCxNQUFrQixDQUFDLENBQW5CLElBQXdCTCxXQUFXSyxDQUFYLE1BQWtCQyxDQUFsQixHQUFzQixDQUFuRCxFQUF1RDtBQUNuREgsd0NBQW9CLElBQXBCO0FBQ0FMLDhCQUFVQyxhQUFWLEVBQXlCUSxHQUF6QjtBQUNBVCw4QkFBVU0sV0FBVixFQUF1QkksSUFBdkIsQ0FBNkJOLE1BQTdCO0FBQ0E7QUFDSDtBQUVKO0FBakJxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CdEMsWUFBSyxDQUFDQyxpQkFBTixFQUEwQixPQUFPLEtBQVA7QUFFN0I7O0FBRUQsV0FBTyxJQUFQO0FBRUgiLCJmaWxlIjoidXBkYXRlX3dhdGNobGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfd2F0Y2hsaXN0ICggd2F0Y2hsaXN0ICwgZmFsc2VfbGl0ZXJhbCAsIGFzc2lnbm1lbnQgKSB7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSB3YXRjaCBsaXN0IGFmdGVyIGxpdGVyYWwgJ2ZhbHNlX2xpdGVyYWwnIHdhcyBqdXN0IGFzc2lnbmVkXG4gICAgICogRmFsc2UsIGJ5IG1ha2luZyBhbnkgY2xhdXNlIHdhdGNoaW5nIGZhbHNlX2xpdGVyYWwgd2F0Y2ggc29tZXRoaW5nIGVsc2UuXG4gICAgICogUmV0dXJucyBGYWxzZSBpdCBpcyBpbXBvc3NpYmxlIHRvIGRvIHNvLCBtZWFuaW5nIGEgY2xhdXNlIGlzIGNvbnRyYWRpY3RlZFxuICAgICAqIGJ5IHRoZSBjdXJyZW50IGFzc2lnbm1lbnQuXG4gICAgICovXG4gICAgd2hpbGUgKCB3YXRjaGxpc3RbZmFsc2VfbGl0ZXJhbF0ubGVuZ3RoICkge1xuXG4gICAgICAgIGxldCBjbGF1c2UgPSB3YXRjaGxpc3RbZmFsc2VfbGl0ZXJhbF1bd2F0Y2hsaXN0W2ZhbHNlX2xpdGVyYWxdLmxlbmd0aCAtIDFdIDtcbiAgICAgICAgbGV0IGZvdW5kX2FsdGVybmF0aXZlID0gZmFsc2UgO1xuXG4gICAgICAgIGZvciAoIGxldCBhbHRlcm5hdGl2ZSBvZiBjbGF1c2UgKSB7XG5cbiAgICAgICAgICAgIGxldCB2ID0gYWx0ZXJuYXRpdmUgPj4+IDEgO1xuICAgICAgICAgICAgbGV0IGEgPSBhbHRlcm5hdGl2ZSAmIDEgO1xuXG4gICAgICAgICAgICBpZiAoIGFzc2lnbm1lbnRbdl0gPT09IC0xIHx8IGFzc2lnbm1lbnRbdl0gPT09IGEgXiAxICkge1xuICAgICAgICAgICAgICAgIGZvdW5kX2FsdGVybmF0aXZlID0gdHJ1ZSA7XG4gICAgICAgICAgICAgICAgd2F0Y2hsaXN0W2ZhbHNlX2xpdGVyYWxdLnBvcCggKSA7XG4gICAgICAgICAgICAgICAgd2F0Y2hsaXN0W2FsdGVybmF0aXZlXS5wdXNoKCBjbGF1c2UgKSA7XG4gICAgICAgICAgICAgICAgYnJlYWsgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICFmb3VuZF9hbHRlcm5hdGl2ZSApIHJldHVybiBmYWxzZSA7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZSA7XG5cbn1cbiJdfQ==