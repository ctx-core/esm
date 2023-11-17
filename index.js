const esm = require('esm')
module.exports = {
	esm__require,
	_require__esm: esm__require,
	esm__cjs__require,
	_require__esm__cjs: esm__cjs__require
}
/** @typedef {import('./index.d.ts').esm__Options} */
/**
 * @param params{esm__Options}
 * @returns {NodeRequire}
 */
function esm__require(params = {}) {
	return esm(module, params)
}
export {
	esm__require as esm_require,
}
/**
 * @param params{esm__Options}
 * @returns {NodeRequire}
 */
function esm__cjs__require(params = {}) {
	return esm__require(params)
}
export {
	esm__cjs__require as esm_cjs_require,
}
