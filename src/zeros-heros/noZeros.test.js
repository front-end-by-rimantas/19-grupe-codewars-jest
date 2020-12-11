const noZeros = require('./noZeros.js');

describe('Blogi variantai', () => {
    test('Neduota reiksme', () => {
        expect(noZeros()).toEqual(false);
    })
    test('Duotas ne skaicius', () => {
        expect(noZeros('adsdf')).toEqual(false);
        expect(noZeros(true)).toEqual(false);
        expect(noZeros(false)).toEqual(false);
        expect(noZeros([])).toEqual(false);
        expect(noZeros({})).toEqual(false);
        expect(noZeros(null)).toEqual(false);
        expect(noZeros(undefined)).toEqual(false);
        expect(noZeros(() => { })).toEqual(false);
    })
    test('Duotas ne tikras skaicius', () => {
        expect(noZeros(NaN)).toEqual(false);
        expect(noZeros(Infinity)).toEqual(false);
        expect(noZeros(-Infinity)).toEqual(false);
    })
})

describe('Geri variantai', () => {
    test('Grazina ta pati skaiciu, kai gale nera nuliu', () => {
        expect(noZeros(1)).toBe(1);
        expect(noZeros(3)).toBe(3);
        expect(noZeros(-3)).toBe(-3);
    })
    test('Grazina ta pati skaiciu, kai gale nera nuliu, bet yra kazkur viduryje', () => {
        expect(noZeros(101)).toBe(101);
        expect(noZeros(105)).toBe(105);
    })
    test('Grazina skaiciu be vieno nulio gale', () => {
        expect(noZeros(1010)).toBe(101);
        expect(noZeros(2020)).toBe(202);
        expect(noZeros(-1010)).toBe(-101);
        expect(noZeros(-2020)).toBe(-202);
    })
    test('Grazina skaiciu be dvieju ir daugiau nuliu gale', () => {
        expect(noZeros(10100)).toBe(101);
        expect(noZeros(202000)).toBe(202);
        expect(noZeros(50500000)).toBe(505);
        expect(noZeros(5000500000)).toBe(50005);
    })
    test('Grazina nuli kai duotas nulis', () => {
        expect(noZeros(0)).toBe(0);
    })
})





// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// - 1050 -> -105