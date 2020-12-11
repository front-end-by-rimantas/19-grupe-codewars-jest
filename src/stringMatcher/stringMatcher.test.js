const stringMatcher = require('./stringMatcher.js');

describe('Blogi variantai', () => {
    test('Neduota reiksme', () => {
        expect(stringMatcher()).toEqual(false);
    })
    test('Duotas netinkamas tipas', () => {
        expect(stringMatcher('', '', 415)).toEqual(false);
        expect(stringMatcher('', 415, '')).toEqual(false);
        expect(stringMatcher(415, '', '')).toEqual(false);
    })
})

describe('Geri variantai', () => {
    test('du tekstai sujungiami tiesiogiai', () => {
        expect(stringMatcher('ab', 'a', 'b')).toEqual(true);
        expect(stringMatcher('ab', 'b', 'a')).toEqual(true);
        expect(stringMatcher('ab', 'bb', 'aa')).toEqual(false);
        expect(stringMatcher('ab', 'A', 'b')).toEqual(true);
        expect(stringMatcher('ab', 'A', 'B')).toEqual(true);
        expect(stringMatcher('ABBA', 'aa', 'bb')).toEqual(true);
        expect(stringMatcher('ABBA', 'a a', 'bb ')).toEqual(true);
    })
})