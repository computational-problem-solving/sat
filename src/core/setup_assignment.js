/**
 * Setup_assignment.
 *
 * @param {number} n
 * @return {number[]}
 */
export default function setup_assignment(n) {
	const assignment = new Array(n);

	for (let i = 0; i < n; ++i) assignment[i] = -1;

	return assignment;
}
