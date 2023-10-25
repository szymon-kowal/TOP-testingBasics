import { caesarCipher } from './caesarCipher.js'

test('', () => {
    expect(caesarCipher('attack, at dawn`s', 5)).toBe('fyyfhp, fy ifbs`x');
});

test('', () => {
    expect(caesarCipher('attack, at dawn`s', 5)).toBe('fyyfhp, fy ifbs`x');
});

test('', () => {
    expect(caesarCipher('lubie karpatke', 19)).toBe('enubx dtkitmdx');
});