"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setup_watchlist = setup_watchlist;
function setup_watchlist(n, clauses) {

    var watchlist = [];

    for (var i = 0; i < 2 * n; ++i) {
        watchlist.push([]);
    }var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = clauses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var clause = _step.value;

            //# Make the clause watch its first literal
            watchlist[clause[0]].push(clause);
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

    return watchlist;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL1NBVDBXL3NldHVwX3dhdGNobGlzdC5qcyJdLCJuYW1lcyI6WyJzZXR1cF93YXRjaGxpc3QiLCJuIiwiY2xhdXNlcyIsIndhdGNobGlzdCIsImkiLCJwdXNoIiwiY2xhdXNlIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsZSxHQUFBQSxlO0FBQVQsU0FBU0EsZUFBVCxDQUEyQkMsQ0FBM0IsRUFBK0JDLE9BQS9CLEVBQXlDOztBQUU1QyxRQUFJQyxZQUFZLEVBQWhCOztBQUVBLFNBQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWtCQSxJQUFJLElBQUlILENBQTFCLEVBQThCLEVBQUVHLENBQWhDO0FBQW9DRCxrQkFBVUUsSUFBVixDQUFnQixFQUFoQjtBQUFwQyxLQUo0QztBQUFBO0FBQUE7O0FBQUE7QUFNNUMsNkJBQW9CSCxPQUFwQiw4SEFBOEI7QUFBQSxnQkFBcEJJLE1BQW9COztBQUMxQjtBQUNBSCxzQkFBVUcsT0FBTyxDQUFQLENBQVYsRUFBcUJELElBQXJCLENBQTJCQyxNQUEzQjtBQUNIO0FBVDJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVzVDLFdBQU9ILFNBQVA7QUFFSCIsImZpbGUiOiJzZXR1cF93YXRjaGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2V0dXBfd2F0Y2hsaXN0ICggbiAsIGNsYXVzZXMgKSB7XG5cbiAgICBsZXQgd2F0Y2hsaXN0ID0gWyBdIDtcblxuICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCAyICogbiA7ICsraSApIHdhdGNobGlzdC5wdXNoKCBbIF0gKSA7XG5cbiAgICBmb3IgKCBsZXQgY2xhdXNlIG9mIGNsYXVzZXMgKSB7XG4gICAgICAgIC8vIyBNYWtlIHRoZSBjbGF1c2Ugd2F0Y2ggaXRzIGZpcnN0IGxpdGVyYWxcbiAgICAgICAgd2F0Y2hsaXN0W2NsYXVzZVswXV0ucHVzaCggY2xhdXNlICkgO1xuICAgIH1cblxuICAgIHJldHVybiB3YXRjaGxpc3QgO1xuXG59XG4iXX0=