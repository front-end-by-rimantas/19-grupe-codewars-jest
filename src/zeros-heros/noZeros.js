function noZeros(n) {
    if (typeof n !== 'number' ||
        isNaN(n) ||
        !isFinite(n)) {
        return false;
    }

    if (Math.abs(n) >= 10) {
        while (Math.abs(n % 10) === 0) {
            n /= 10;
        }
    }

    return n;
}

module.exports = noZeros;