"use strict";
const esm = require('esm');
module.exports = {
    esm_require,
    _require__esm: esm_require,
    esm_cjs_require,
    _require__esm__cjs: esm_cjs_require,
};
function esm_require(params = {}) {
    return esm(module, params);
}
function esm_cjs_require(params = {}) {
    return esm_require(params);
}
//# sourceMappingURL=src/lib.js.map