import { reverseStr } from './reverseString.js';

test('Reverse string something', () => {
    expect(reverseStr('something')).toBe('gnihtemos');
});

test('Reveres string nothing', () => {
    expect(reverseStr('nothing')).toBe('gnihton');
});