/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution median.
*
* @module @stdlib/stats-base-dists-discrete-uniform-median
*
* @example
* var median = require( '@stdlib/stats-base-dists-discrete-uniform-median' );
*
* var v = median( 0, 1 );
* // returns 0.5
*
* v = median( 2, 10 );
* // returns 6.0
*
* v = median( -10, 10 );
* // returns 0.0
*/

// MODULES //

var median = require( './main.js' );


// EXPORTS //

module.exports = median;
