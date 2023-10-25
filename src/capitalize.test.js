import { capitalize } from './capitalize.js';

test('Capitalize the string something', () => {
    expect(capitalize('something')).toBe('Something');
});

test('Capitalize the string nothing', () => {
    expect(capitalize('nothing')).toBe('Nothing');
});
