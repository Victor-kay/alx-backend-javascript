// 2-calcul_chai.test.js

const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the sum of two rounded numbers', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the subtraction of two rounded numbers', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the division of two rounded numbers', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when trying to divide by 0', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
