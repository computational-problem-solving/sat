"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._verify = _verify;

/**
 * Verifies that an assignment vector satisfies a k-CNF formula given as a list
 * of clauses. The list of clauses and the assignment vector are in parity
 * format.
 *
 * @param {Iterable} clauses The clauses in parity format.
 * @param {Array} assignment The assignment vector in parity format.
 * @returns {Boolean} Whether the assignment satisfies the k-CNF formula
 * represented by the list of clauses.
 */
function _verify(clauses, assignment) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    loop: for (var _iterator = clauses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var clause = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {

        for (var _iterator2 = clause[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var literal = _step2.value;


          if ((literal ^ assignment[literal >>> 1]) & 1) continue loop;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return false;
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

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL192ZXJpZnkuanMiXSwibmFtZXMiOlsiX3ZlcmlmeSIsImNsYXVzZXMiLCJhc3NpZ25tZW50IiwibG9vcCIsImNsYXVzZSIsImxpdGVyYWwiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCQSxPLEdBQUFBLE87O0FBVmhCOzs7Ozs7Ozs7O0FBVU8sU0FBU0EsT0FBVCxDQUFtQkMsT0FBbkIsRUFBNkJDLFVBQTdCLEVBQTBDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRWhEQyxRQUZnRCxFQUV6QyxxQkFBc0JGLE9BQXRCLDhIQUFnQztBQUFBLFVBQXBCRyxNQUFvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFdEMsOEJBQXVCQSxNQUF2QixtSUFBZ0M7QUFBQSxjQUFwQkMsT0FBb0I7OztBQUUvQixjQUFLLENBQUVBLFVBQVVILFdBQVdHLFlBQVksQ0FBdkIsQ0FBWixJQUEwQyxDQUEvQyxFQUFtRCxTQUFTRixJQUFUO0FBRW5EO0FBTnFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUXRDLGFBQU8sS0FBUDtBQUVBO0FBWitDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2hELFNBQU8sSUFBUDtBQUVBIiwiZmlsZSI6Il92ZXJpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogVmVyaWZpZXMgdGhhdCBhbiBhc3NpZ25tZW50IHZlY3RvciBzYXRpc2ZpZXMgYSBrLUNORiBmb3JtdWxhIGdpdmVuIGFzIGEgbGlzdFxuICogb2YgY2xhdXNlcy4gVGhlIGxpc3Qgb2YgY2xhdXNlcyBhbmQgdGhlIGFzc2lnbm1lbnQgdmVjdG9yIGFyZSBpbiBwYXJpdHlcbiAqIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBjbGF1c2VzIFRoZSBjbGF1c2VzIGluIHBhcml0eSBmb3JtYXQuXG4gKiBAcGFyYW0ge0FycmF5fSBhc3NpZ25tZW50IFRoZSBhc3NpZ25tZW50IHZlY3RvciBpbiBwYXJpdHkgZm9ybWF0LlxuICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGFzc2lnbm1lbnQgc2F0aXNmaWVzIHRoZSBrLUNORiBmb3JtdWxhXG4gKiByZXByZXNlbnRlZCBieSB0aGUgbGlzdCBvZiBjbGF1c2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX3ZlcmlmeSAoIGNsYXVzZXMgLCBhc3NpZ25tZW50ICkge1xuXG5cdGxvb3AgOiBmb3IgKCBjb25zdCBjbGF1c2Ugb2YgY2xhdXNlcyApIHtcblxuXHRcdGZvciAoIGNvbnN0IGxpdGVyYWwgb2YgY2xhdXNlICkge1xuXG5cdFx0XHRpZiAoICggbGl0ZXJhbCBeIGFzc2lnbm1lbnRbbGl0ZXJhbCA+Pj4gMV0gKSAmIDEgKSBjb250aW51ZSBsb29wIDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZSA7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlIDtcblxufVxuIl19