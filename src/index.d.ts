import { default as _esm } from 'esm'
// type esm__argv_a_T = Parameters<esm>
export type esm__Parameters = Parameters<typeof _esm>
export type esm__Options = esm__Parameters[1]
export declare function esm__require(params?:esm__Options):typeof require
export {
	esm__require as esm_require,
}
export declare function esm__cjs__require(params?:esm__Options):typeof require
export {
	esm__cjs__require as esm_cjs_require,
}
