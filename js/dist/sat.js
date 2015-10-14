'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {

  'use strict';

  var definition = function definition(exports, undefined) {
    var marked2$0 = [_solve, map, zip].map(regeneratorRuntime.mark);

    /* js/src/api */
    /* js/src/api/SATInstance.js */

    var SATInstance = (function () {
      function SATInstance() {
        _classCallCheck(this, SATInstance);

        this.variables = [];
        this.variable_table = new Map();
        this.clauses = [];
      }

      _createClass(SATInstance, [{
        key: 'parse_and_add_clause',
        value: function parse_and_add_clause(line) {

          var clause = new Set();

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = line.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var literal = _step.value;

              var negated = literal.startsWith('~') ? 1 : 0;
              var variable = literal.slice(negated);

              if (!this.variable_table.has(variable)) {
                this.variable_table.set(variable, this.variables.length);
                this.variables.push(variable);
              }

              var encoded_literal = this.variable_table.get(variable) << 1 | negated;
              clause.add(encoded_literal);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.clauses.push([].concat(_toConsumableArray(clause)));
        }
      }, {
        key: 'literal_to_string',
        value: function literal_to_string(literal) {
          var s = literal & 1 ? '~' : '';
          return s + this.variables[literal >> 1];
        }
      }, {
        key: 'clause_to_string',
        value: function clause_to_string(clause) {
          var _this = this;

          return (function () {
            var _join = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = clause[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var l = _step2.value;

                _join.push(_this.literal_to_string(l));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            return _join;
          })().join(' ');
        }
      }, {
        key: 'assignment_to_string',
        value: function assignment_to_string(assignment) {
          var brief = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
          var starting_with = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

          var literals = [];

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = zip(assignment, this.variables)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _step3$value = _slicedToArray(_step3.value, 2);

              var a = _step3$value[0];
              var v = _step3$value[1];

              if (!v.startsWith(starting_with)) continue;
              if (a === 0 && !brief) literals.push('~' + v);else if (a) literals.push(v);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return literals.join(' ');
        }
      }, {
        key: 'solve',
        value: regeneratorRuntime.mark(function solve() {
          var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, assignment;

          return regeneratorRuntime.wrap(function solve$(context$4$0) {
            while (1) switch (context$4$0.prev = context$4$0.next) {
              case 0:
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                context$4$0.prev = 3;
                _iterator4 = _solve(this, setup_watchlist(this), makeassignment(this), 0)[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  context$4$0.next = 12;
                  break;
                }

                assignment = _step4.value;
                context$4$0.next = 9;
                return zip(this.variables, assignment.slice());

              case 9:
                _iteratorNormalCompletion4 = true;
                context$4$0.next = 5;
                break;

              case 12:
                context$4$0.next = 18;
                break;

              case 14:
                context$4$0.prev = 14;
                context$4$0.t0 = context$4$0['catch'](3);
                _didIteratorError4 = true;
                _iteratorError4 = context$4$0.t0;

              case 18:
                context$4$0.prev = 18;
                context$4$0.prev = 19;

                if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                  _iterator4['return']();
                }

              case 21:
                context$4$0.prev = 21;

                if (!_didIteratorError4) {
                  context$4$0.next = 24;
                  break;
                }

                throw _iteratorError4;

              case 24:
                return context$4$0.finish(21);

              case 25:
                return context$4$0.finish(18);

              case 26:
              case 'end':
                return context$4$0.stop();
            }
          }, solve, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
      }]);

      return SATInstance;
    })();

    exports.SATInstance = SATInstance;

    /* js/src/core */
    /* js/src/core/_solve.js */
    function _solve(instance, watchlist, assignment, d) {
      var _arr, _i, a;

      return regeneratorRuntime.wrap(function _solve$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            if (!(d === instance.variables.length)) {
              context$3$0.next = 4;
              break;
            }

            context$3$0.next = 3;
            return assignment;

          case 3:
            return context$3$0.abrupt('return');

          case 4:
            _arr = [0, 1];
            _i = 0;

          case 6:
            if (!(_i < _arr.length)) {
              context$3$0.next = 14;
              break;
            }

            a = _arr[_i];

            assignment[d] = a;

            if (!update_watchlist(instance, watchlist, d << 1 | a, assignment)) {
              context$3$0.next = 11;
              break;
            }

            return context$3$0.delegateYield(_solve(instance, watchlist, assignment, d + 1), 't0', 11);

          case 11:
            _i++;
            context$3$0.next = 6;
            break;

          case 14:

            assignment[d] = -1;

          case 15:
          case 'end':
            return context$3$0.stop();
        }
      }, marked2$0[0], this);
    }

    /* js/src/core/makeassignment.js */
    function makeassignment(instance) {

      var len = instance.variables.length;

      var assignment = new Array(instance.variables.length);

      for (var i = 0; i < len; ++i) {
        assignment[i] = -1;
      }return assignment;
    }

    /* js/src/core/setup_watchlist.js */
    function setup_watchlist(instance) {

      var watchlist = [];

      for (var i = 0; i < 2 * instance.variables.length; ++i) {
        watchlist.push([]);
      }var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = instance.clauses[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var clause = _step5.value;

          //# Make the clause watch its first literal
          watchlist[clause[0]].push(clause);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5['return']) {
            _iterator5['return']();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return watchlist;
    }

    exports.setup_watchlist = setup_watchlist;

    /* js/src/core/update_watchlist.js */
    function update_watchlist(instance, watchlist, false_literal, assignment) {

      /**
       * Updates the watch list after literal 'false_literal' was just assigned
       * False, by making any clause watching false_literal watch something else.
       * Returns False it is impossible to do so, meaning a clause is contradicted
       * by the current assignment.
      */
      while (watchlist[false_literal].length) {

        var clause = watchlist[false_literal][watchlist[false_literal].length - 1];
        var found_alternative = false;

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = clause[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var alternative = _step6.value;

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
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6['return']) {
              _iterator6['return']();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        if (!found_alternative) return false;
      }

      return true;
    }

    exports.update_watchlist = update_watchlist;

    /* js/src/itertools */
    /* js/src/itertools/list.js */

    function list(iterable) {
      return [].concat(_toConsumableArray(iterable));
    }

    exports.list = list;

    /* js/src/itertools/map.js */
    function map(callable, iterable) {
      var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, item;

      return regeneratorRuntime.wrap(function map$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            _iteratorNormalCompletion7 = true;
            _didIteratorError7 = false;
            _iteratorError7 = undefined;
            context$3$0.prev = 3;
            _iterator7 = iterable[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
              context$3$0.next = 12;
              break;
            }

            item = _step7.value;
            context$3$0.next = 9;
            return callable(item);

          case 9:
            _iteratorNormalCompletion7 = true;
            context$3$0.next = 5;
            break;

          case 12:
            context$3$0.next = 18;
            break;

          case 14:
            context$3$0.prev = 14;
            context$3$0.t0 = context$3$0['catch'](3);
            _didIteratorError7 = true;
            _iteratorError7 = context$3$0.t0;

          case 18:
            context$3$0.prev = 18;
            context$3$0.prev = 19;

            if (!_iteratorNormalCompletion7 && _iterator7['return']) {
              _iterator7['return']();
            }

          case 21:
            context$3$0.prev = 21;

            if (!_didIteratorError7) {
              context$3$0.next = 24;
              break;
            }

            throw _iteratorError7;

          case 24:
            return context$3$0.finish(21);

          case 25:
            return context$3$0.finish(18);

          case 26:
          case 'end':
            return context$3$0.stop();
        }
      }, marked2$0[1], this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }

    /* js/src/itertools/next.js */

    function next(iterator) {

      return iterator.next();
    }

    /* js/src/itertools/zip.js */

    function zip() {
      for (var _len = arguments.length, iterables = Array(_len), _key = 0; _key < _len; _key++) {
        iterables[_key] = arguments[_key];
      }

      var iterators, buffer, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, result;

      return regeneratorRuntime.wrap(function zip$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            iterators = (function () {
              var _iterators = [];
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = iterables[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var iterable = _step8.value;

                  _iterators.push(iterable[Symbol.iterator]());
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8['return']) {
                    _iterator8['return']();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }

              return _iterators;
            })();

            if (!(iterators.length === 0)) {
              context$3$0.next = 3;
              break;
            }

            return context$3$0.abrupt('return');

          case 3:
            if (!true) {
              context$3$0.next = 36;
              break;
            }

            buffer = [];
            _iteratorNormalCompletion9 = true;
            _didIteratorError9 = false;
            _iteratorError9 = undefined;
            context$3$0.prev = 8;
            _iterator9 = map(next, iterators)[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
              context$3$0.next = 18;
              break;
            }

            result = _step9.value;

            if (!result.done) {
              context$3$0.next = 14;
              break;
            }

            return context$3$0.abrupt('return');

          case 14:

            buffer.push(result.value);

          case 15:
            _iteratorNormalCompletion9 = true;
            context$3$0.next = 10;
            break;

          case 18:
            context$3$0.next = 24;
            break;

          case 20:
            context$3$0.prev = 20;
            context$3$0.t0 = context$3$0['catch'](8);
            _didIteratorError9 = true;
            _iteratorError9 = context$3$0.t0;

          case 24:
            context$3$0.prev = 24;
            context$3$0.prev = 25;

            if (!_iteratorNormalCompletion9 && _iterator9['return']) {
              _iterator9['return']();
            }

          case 27:
            context$3$0.prev = 27;

            if (!_didIteratorError9) {
              context$3$0.next = 30;
              break;
            }

            throw _iteratorError9;

          case 30:
            return context$3$0.finish(27);

          case 31:
            return context$3$0.finish(24);

          case 32:
            context$3$0.next = 34;
            return buffer;

          case 34:
            context$3$0.next = 3;
            break;

          case 36:
          case 'end':
            return context$3$0.stop();
        }
      }, marked2$0[2], this, [[8, 20, 24, 32], [25,, 27, 31]]);
    }

    exports.zip = zip;

    return exports;
  };
  if (typeof exports === "object") {
    definition(exports);
  } else if (typeof define === "function" && define.amd) {
    define("aureooms-js-sat", [], function () {
      return definition({});
    });
  } else if (typeof window === "object" && typeof window.document === "object") {
    definition(window["sat"] = {});
  } else console.error("unable to detect type of module to define for aureooms-js-sat");
})();

/**
 * Recursively solve SAT by assigning to variables d, d+1, ..., n-1. Assumes
 * variables 0, ..., d-1 are assigned so far. A generator for all the
 * satisfying assignments is returned.
*/