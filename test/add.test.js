const test = require('unit.js');
const index = require('../src/index');

describe('addition', function () {
    describe('add', function () {
        it('should add 2 number', function () {
            var a = 45, b = 5;
            index.addition.add(a, b)
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
