/**
 * Title:   Clorox Assessment for Associate Full-stack Developer role
 * Author:  Kevin Reber (https://www.kevinreber.dev/)
 *
 * Objective:
 *  - The program should print the numbers 1 to 100. For multiples of 3, print “CLX” instead of the number
 *    and for the multiples of 5, print “DTC”. For numbers that are a multiple of 3 and 5, it should print “CLXDTC”.
 *
 * Requirements:
 *  - This program should run from the command line, using NodeJs.
 *
 * Example:
 *  Input: clxDtc(15)
 *  Output:
 *    1
 *    2
 *    CLX
 *    4
 *    DTC
 *    CLX
 *    7
 *    8
 *    CLX
 *    DTC
 *    11
 *    CLX
 *    13
 *    14
 *    CLXDTC
 */

const clxDtc = (n) => {
	// edge case
	if (typeof n !== 'number' || n < 1 || n > 100) return;

	for (let i = 1; i <= n; i++) {
		let result = '';
		if (i % 3 === 0) result += 'CLX';
		if (i % 5 === 0) result += 'DTC';

		if (result !== '') {
			console.log(result);
		} else console.log(i);
	}
	return;
};

clxDtc(100);
