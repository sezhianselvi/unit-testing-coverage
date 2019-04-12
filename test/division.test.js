const test = require('unit.js');
const index = require('../src/index');

describe('division', function () {
    describe('divide', function () {
        it('should divide 2 number', function () {
            var a = 45, b = 5;
            index.division.divide(a, b)
                .then(function (result) {
                    console.log(result);
                })

            // var a = 'ab', b = 30;
            // index.division.divide(a, b)
            //     .then(function (result) {
            //         console.log(result)
            //     })

        })
    })
})

