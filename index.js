/**
 * Adds or multiplies two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - Result of the operation
 */
function add(num1,num2)
{
    return num1*num2;
}

// Export the function for testing
module.exports = { add };

console.log(add(10,20));
