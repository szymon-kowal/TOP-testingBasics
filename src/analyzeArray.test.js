import { analyzeArray } from './analyzeArray.js'
const testCase1 = [1,8,3,4,2,6];

const result = analyzeArray(testCase1);

test('Is output an object and does it returns expected values?', () => {
    expect(result).toBeInstanceOf(Object);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

