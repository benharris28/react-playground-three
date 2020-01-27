import leapYear from './index';
import { isTSAnyKeyword } from '@babel/types';

it('should not be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
});

it('should not be a leap year if divisible by 100, not 400', () => {
    const input = 1984;
    const expectedOutput = true;
    expect(leapYear(input)).toBe(expectedOutput);
});



