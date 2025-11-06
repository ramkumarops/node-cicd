// Import the function to test
const { add } = require('./index');

/**
 * Test suite for the add function
 */
describe('add function', () => {
    
    /**
     * Test: should multiply two positive numbers
     */
    test('should multiply two positive numbers', () => {
        expect(add(10, 20)).toBe(200);
    });

    test('should multiply two positive numbers', () => {
        expect(add(10, 5)).toBe(50);
    });

    /**
     * Test: should handle zero values
     */
    test('should handle zero as first parameter', () => {
        expect(add(0, 5)).toBe(0);
    });

    test('should handle zero as second parameter', () => {
        expect(add(5, 0)).toBe(0);
    });

   
 
});

