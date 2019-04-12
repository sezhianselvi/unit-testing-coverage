const test = require('unit.js');
const index = require('../src/index');

describe('Multiplication', function () {
    describe('Multiple', function () {
        it('should Multiply 2 number', function () {
            var a = 45, b = 15;
            index.multiplication.multiply(a, b)
                .then(function (result) {
                    console.log(result);
                })

            index.multiplication.multiply(5)
                .then(function (result) {
                    console.log('Multiple', result);
                })
                .catch(function (error) {
                    console.log('Error', error);
                })
        })
    })
})
