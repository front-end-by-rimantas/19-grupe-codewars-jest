function stringMatcher(string, str1, str2) {
    if (typeof string !== 'string' ||
        typeof str1 !== 'string' ||
        typeof str2 !== 'string') {
        return false
    }

    const lowerString = string.toLowerCase();
    const lowerStr12 = (str1 + str2).toLowerCase();

    const sortedString = lowerString.split('').sort().join('');
    const sortedStr12 = lowerStr12.split('').sort().join('');

    const trimedString = sortedString.trim();
    const trimedStr12 = sortedStr12.trim();

    return trimedString === trimedStr12;
}

module.exports = stringMatcher;