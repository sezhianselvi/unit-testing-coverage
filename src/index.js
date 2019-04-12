const addition = require('./add');
const subtraction = require('./sub');
const multiplication = require('./multiple');
const division = require('./division');


// add(3,4)    
//     .then(function (result) {    
//     console.log('Add', result);
// })

// subtract(5,4)    
//     .then(function (result) {    
//     console.log('Subtract', result);
// })

/**
 * This function multiplies two number
 * @param {number} input any number
 * @param {number} input any number
 * @returns {number} multiplication of two numbers.
 */

multiplication.multiply(5,8)
    .then(function (result) {
        console.log('Multiple', result);
    })
    .catch(function (error) {
        console.log('Error', error);
    })

// division(5,4)    
//     .then(function (result) {    
//     console.log('Division', result);
// })

module.exports = {
    addition, subtraction, multiplication, division
}

