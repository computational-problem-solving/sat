'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {
		var marked2$0 = [map, zip, _solve].map(regeneratorRuntime.mark);

		/* js/src/0-lib */
		/* js/src/0-lib/itertools */
		/* js/src/0-lib/itertools/map.js */
		function map(callable, iterable) {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

			return regeneratorRuntime.wrap(function map$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 3;
						_iterator = iterable[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 12;
							break;
						}

						item = _step.value;
						context$3$0.next = 9;
						return callable(item);

					case 9:
						_iteratorNormalCompletion = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0['catch'](3);
						_didIteratorError = true;
						_iteratorError = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion && _iterator['return']) {
							_iterator['return']();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case 'end':
						return context$3$0.stop();
				}
			}, marked2$0[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
		}

		/* js/src/0-lib/itertools/next.js */

		function next(iterator) {

			return iterator.next();
		}

		/* js/src/0-lib/itertools/zip.js */

		function zip() {
			for (var _len = arguments.length, iterables = Array(_len), _key = 0; _key < _len; _key++) {
				iterables[_key] = arguments[_key];
			}

			var iterators, buffer, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, result;

			return regeneratorRuntime.wrap(function zip$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						iterators = (function () {
							var _iterators = [];
							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = iterables[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var iterable = _step2.value;

									_iterators.push(iterable[Symbol.iterator]());
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
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 8;
						_iterator3 = map(next, iterators)[Symbol.iterator]();

					case 10:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 18;
							break;
						}

						result = _step3.value;

						if (!result.done) {
							context$3$0.next = 14;
							break;
						}

						return context$3$0.abrupt('return');

					case 14:

						buffer.push(result.value);

					case 15:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 10;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0['catch'](8);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion3 && _iterator3['return']) {
							_iterator3['return']();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError3) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError3;

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
			}, marked2$0[1], this, [[8, 20, 24, 32], [25,, 27, 31]]);
		}

		exports.zip = zip;

		/* js/src/1-core */
		/* js/src/1-core/_solve.js */
		function _solve(n, clauses, watchlist, assignment, d) {
			var _arr, _i, a;

			return regeneratorRuntime.wrap(function _solve$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						if (!(d === n)) {
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

						if (!update_watchlist(watchlist, d << 1 | a, assignment)) {
							context$3$0.next = 11;
							break;
						}

						return context$3$0.delegateYield(_solve(n, clauses, watchlist, assignment, d + 1), 't0', 11);

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
			}, marked2$0[2], this);
		}

		/* js/src/1-core/_verify.js */

		var _verify = function _verify(clauses, assignment) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				loop: for (var _iterator4 = clauses[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var clause = _step4.value;
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {

						for (var _iterator5 = clause[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var literal = _step5.value;

							if ((literal ^ assignment[literal >>> 1]) & 1) continue loop;
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

					return false;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4['return']) {
						_iterator4['return']();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return true;
		};

		/* js/src/1-core/convert */
		/* js/src/1-core/convert/KeysInstance.js */

		var KeysInstance = (function () {
			function KeysInstance(variables, clauses) {
				_classCallCheck(this, KeysInstance);

				this.variables = variables;
				this.clauses = clauses;
				this.n = this.variables.length;
			}

			/* js/src/1-core/convert/ParitiesInstance.js */

			_createClass(KeysInstance, [{
				key: 'assignment',
				value: function assignment(certificate) {
					return _certificate_to_keys(this.variables, certificate);
				}
			}]);

			return KeysInstance;
		})();

		var ParitiesInstance = (function () {
			function ParitiesInstance(clauses) {
				_classCallCheck(this, ParitiesInstance);

				this.clauses = clauses;
				this.n = _count(clauses);
			}

			/* js/src/1-core/convert/SignsInstance.js */

			_createClass(ParitiesInstance, [{
				key: 'assignment',
				value: function assignment(certificate) {
					return certificate.slice();
				}
			}]);

			return ParitiesInstance;
		})();

		var SignsInstance = (function () {
			function SignsInstance(clauses) {
				_classCallCheck(this, SignsInstance);

				this.clauses = clauses;
				this.n = _count(clauses);
			}

			/* js/src/1-core/convert/_certificate_to_keys.js */

			_createClass(SignsInstance, [{
				key: 'assignment',
				value: function assignment(certificate) {
					return [0].concat(certificate);
				}
			}]);

			return SignsInstance;
		})();

		var _certificate_to_keys = function _certificate_to_keys(variables, certificate) {

			return new Map(zip(variables, certificate));
		};

		/* js/src/1-core/convert/_count.js */

		var _count = function _count(clauses) {

			var c = -1;

			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = clauses[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var clause = _step6.value;
					var _iteratorNormalCompletion7 = true;
					var _didIteratorError7 = false;
					var _iteratorError7 = undefined;

					try {
						for (var _iterator7 = clause[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
							var literal = _step7.value;

							c = Math.max(c, literal >>> 1);
						}
					} catch (err) {
						_didIteratorError7 = true;
						_iteratorError7 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion7 && _iterator7['return']) {
								_iterator7['return']();
							}
						} finally {
							if (_didIteratorError7) {
								throw _iteratorError7;
							}
						}
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

			return c + 1;
		};

		/* js/src/1-core/convert/_keys_to_parity.js */

		var _keys_to_parity = function _keys_to_parity(clauses) {

			var keys = new Map();
			var variables = [];

			var instance = [];

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = clauses[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var clause = _step8.value;

					var new_clause = new Set();

					var _iteratorNormalCompletion9 = true;
					var _didIteratorError9 = false;
					var _iteratorError9 = undefined;

					try {
						for (var _iterator9 = clause[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
							var _step9$value = _slicedToArray(_step9.value, 2);

							var positive = _step9$value[0];
							var variable = _step9$value[1];

							if (!keys.has(variable)) {
								keys.set(variable, variables.length);
								variables.push(variable);
							}

							var negated = positive ? 0 : 1;
							var literal = keys.get(variable) << 1 | negated;

							new_clause.add(literal);
						}
					} catch (err) {
						_didIteratorError9 = true;
						_iteratorError9 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion9 && _iterator9['return']) {
								_iterator9['return']();
							}
						} finally {
							if (_didIteratorError9) {
								throw _iteratorError9;
							}
						}
					}

					instance.push([].concat(_toConsumableArray(new_clause)));
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

			return new KeysInstance(variables, instance);
		};

		/* js/src/1-core/convert/_parity_to_keys.js */

		var _parity_to_keys = function _parity_to_keys(variables, clauses) {

			return (function () {
				var _ref = [];
				var _iteratorNormalCompletion10 = true;
				var _didIteratorError10 = false;
				var _iteratorError10 = undefined;

				try {
					var _loop = function () {
						var clause = _step10.value;

						_ref.push((function () {
							var _ref$push = [];
							var _iteratorNormalCompletion11 = true;
							var _didIteratorError11 = false;
							var _iteratorError11 = undefined;

							try {
								for (var _iterator11 = clause[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
									var literal = _step11.value;

									_ref$push.push([!(literal & 1), variables[literal >>> 1]]);
								}
							} catch (err) {
								_didIteratorError11 = true;
								_iteratorError11 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion11 && _iterator11['return']) {
										_iterator11['return']();
									}
								} finally {
									if (_didIteratorError11) {
										throw _iteratorError11;
									}
								}
							}

							return _ref$push;
						})());
					};

					for (var _iterator10 = clauses[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
						_loop();
					}
				} catch (err) {
					_didIteratorError10 = true;
					_iteratorError10 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion10 && _iterator10['return']) {
							_iterator10['return']();
						}
					} finally {
						if (_didIteratorError10) {
							throw _iteratorError10;
						}
					}
				}

				return _ref;
			})();
		};

		/* js/src/1-core/convert/_parity_to_sign.js */

		var _parity_to_sign = function _parity_to_sign(clauses) {

			return (function () {
				var _ref2 = [];
				var _iteratorNormalCompletion12 = true;
				var _didIteratorError12 = false;
				var _iteratorError12 = undefined;

				try {
					var _loop2 = function () {
						var clause = _step12.value;

						_ref2.push((function () {
							var _ref2$push = [];
							var _iteratorNormalCompletion13 = true;
							var _didIteratorError13 = false;
							var _iteratorError13 = undefined;

							try {
								for (var _iterator13 = clause[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
									var literal = _step13.value;

									_ref2$push.push(literal & 1 ? -(literal >>> 1) - 1 : (literal >>> 1) + 1);
								}
							} catch (err) {
								_didIteratorError13 = true;
								_iteratorError13 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion13 && _iterator13['return']) {
										_iterator13['return']();
									}
								} finally {
									if (_didIteratorError13) {
										throw _iteratorError13;
									}
								}
							}

							return _ref2$push;
						})());
					};

					for (var _iterator12 = clauses[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
						_loop2();
					}
				} catch (err) {
					_didIteratorError12 = true;
					_iteratorError12 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion12 && _iterator12['return']) {
							_iterator12['return']();
						}
					} finally {
						if (_didIteratorError12) {
							throw _iteratorError12;
						}
					}
				}

				return _ref2;
			})();
		};

		/* js/src/1-core/convert/_sign_to_parity.js */

		var _sign_to_parity = function _sign_to_parity(clauses) {

			return new SignsInstance((function () {
				var _ref3 = [];
				var _iteratorNormalCompletion14 = true;
				var _didIteratorError14 = false;
				var _iteratorError14 = undefined;

				try {
					var _loop3 = function () {
						var clause = _step14.value;

						_ref3.push((function () {
							var _ref3$push = [];
							var _iteratorNormalCompletion15 = true;
							var _didIteratorError15 = false;
							var _iteratorError15 = undefined;

							try {
								for (var _iterator15 = clause[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
									var literal = _step15.value;

									_ref3$push.push(literal > 0 ? literal - 1 << 1 : -literal - 1 << 1 | 1);
								}
							} catch (err) {
								_didIteratorError15 = true;
								_iteratorError15 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion15 && _iterator15['return']) {
										_iterator15['return']();
									}
								} finally {
									if (_didIteratorError15) {
										throw _iteratorError15;
									}
								}
							}

							return _ref3$push;
						})());
					};

					for (var _iterator14 = clauses[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
						_loop3();
					}
				} catch (err) {
					_didIteratorError14 = true;
					_iteratorError14 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion14 && _iterator14['return']) {
							_iterator14['return']();
						}
					} finally {
						if (_didIteratorError14) {
							throw _iteratorError14;
						}
					}
				}

				return _ref3;
			})());
		};

		/* js/src/1-core/makeassignment.js */
		function makeassignment(n) {

			var assignment = new Array(n);

			for (var i = 0; i < n; ++i) {
				assignment[i] = -1;
			}return assignment;
		}

		/* js/src/1-core/parse */
		/* js/src/1-core/parse/_parse_DIMACS_CNF.js */

		var _skip_blanks = function _skip_blanks(iterator) {

			while (true) {
				var current = iterator.next();
				if (current.done) return [true, null];

				switch (current.value) {
					case ' ':
					case '\t':
					case '\n':
						continue;
				}

				return [false, current.value];
			}
		};

		var _parse_int = function _parse_int(first_symbol, iterator) {

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
		};

		var _parse_DIMACS_CNF = function _parse_DIMACS_CNF(iterable) {

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

				var current = iterator.next();

				if (current.done) return clauses;

				// end of description
				if (current.value === '\n') break;
			}

			// parse problem

			loop: while (true) {

				var clause = [];

				while (true) {
					var _skip_blanks2 = _skip_blanks(iterator);

					var _skip_blanks22 = _slicedToArray(_skip_blanks2, 2);

					var done1 = _skip_blanks22[0];
					var symbol = _skip_blanks22[1];

					if (done1) {
						if (clause.length > 0) clauses.push(clause);
						return clauses;
					}

					var _parse_int2 = _parse_int(symbol, iterator);

					var _parse_int22 = _slicedToArray(_parse_int2, 2);

					var done2 = _parse_int22[0];
					var i = _parse_int22[1];

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
		};

		/* js/src/1-core/setup_watchlist.js */
		function setup_watchlist(n, clauses) {

			var watchlist = [];

			for (var i = 0; i < 2 * n; ++i) {
				watchlist.push([]);
			}var _iteratorNormalCompletion16 = true;
			var _didIteratorError16 = false;
			var _iteratorError16 = undefined;

			try {
				for (var _iterator16 = clauses[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
					var clause = _step16.value;

					//# Make the clause watch its first literal
					watchlist[clause[0]].push(clause);
				}
			} catch (err) {
				_didIteratorError16 = true;
				_iteratorError16 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion16 && _iterator16['return']) {
						_iterator16['return']();
					}
				} finally {
					if (_didIteratorError16) {
						throw _iteratorError16;
					}
				}
			}

			return watchlist;
		}

		exports.setup_watchlist = setup_watchlist;

		/* js/src/1-core/update_watchlist.js */
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

				var _iteratorNormalCompletion17 = true;
				var _didIteratorError17 = false;
				var _iteratorError17 = undefined;

				try {
					for (var _iterator17 = clause[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
						var alternative = _step17.value;

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
					_didIteratorError17 = true;
					_iteratorError17 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion17 && _iterator17['return']) {
							_iterator17['return']();
						}
					} finally {
						if (_didIteratorError17) {
							throw _iteratorError17;
						}
					}
				}

				if (!found_alternative) return false;
			}

			return true;
		}

		exports.update_watchlist = update_watchlist;

		/* js/src/2-api */
		/* js/src/2-api/decide.js */

		var decide = function decide(instance) {

			return !solve(instance).next().done;
		};

		exports.decide = decide;

		/* js/src/2-api/from.js */

		exports.from = {
			parities: function parities(clauses) {
				return new ParitiesInstance(clauses);
			},
			signs: _sign_to_parity,
			keys: _keys_to_parity,
			dcnf: function dcnf(stream) {
				return new ParitiesInstance(_parse_DIMACS_CNF(stream));
			}
		};

		/* js/src/2-api/solve.js */
		var solve = regeneratorRuntime.mark(function solve(_ref4) {
			var clauses = _ref4.clauses;
			var n = _ref4.n;
			return regeneratorRuntime.wrap(function solve$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						return context$3$0.delegateYield(_solve(n, clauses, setup_watchlist(n, clauses), makeassignment(n), 0), 't0', 1);

					case 1:
					case 'end':
						return context$3$0.stop();
				}
			}, solve, this);
		});

		exports.solve = solve;

		/* js/src/2-api/verify.js */

		var verify = function verify(_ref5, certificate) {
			var clauses = _ref5.clauses;
			return _verify(clauses, certificate);
		};

		exports.verify = verify;

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