function isSwan() : boolean {
    if (typeof swan !== 'undefined' && typeof swan.isLoginSync === 'function') {
        return true;
    }
    return false;
}

export {
    isSwan,
}
