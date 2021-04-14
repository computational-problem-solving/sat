import _verify from '../core/_verify.js';
/**
 * Verify that satisfiability of the input instance can be derived from the
 * input certificate.
 *
 * @param {ParitiesInstance|SignsInstance|KeysInstance} instance
 * @param {number[]} certificate
 * @return {boolean}
 */
const verify = ({clauses}, certificate) => _verify(clauses, certificate);
export default verify;
