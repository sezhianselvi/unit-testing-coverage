const test = require('unit.js');
const index = require('../src/index');

describe('Subtraction', function () {
    describe('sub', function () {
        it('should subtract 2 number', function () {
            var a = 45, b = 15;
            index.subtraction.subtract(a, b)
                .then(function (result) {
                    console.log(result);
                })

            // var a = 'ab', b = 30;
            // index.addition.add(a, b)
            //     .then(function (result) {
            //         console.log(result)
            //     })

        })
    })
})
