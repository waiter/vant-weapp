"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSwan() {
    if (typeof swan !== 'undefined' && typeof swan.isLoginSync === 'function') {
        return true;
    }
    return false;
}
exports.isSwan = isSwan;
