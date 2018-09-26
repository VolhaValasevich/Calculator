'use strict';

const Calc = require('../src/calculator');

describe('Calculator', () => {
    let instance;

    beforeAll(() => {
        instance = new Calc();
    });

    it ('should calculate the sum of argumens', () => {
        expect(instance.sum(1, 2)).toBe(3);
    });

    it ('should multiply the arguments', () => {
        expect(instance.mult(3, 2)).toBe(6);
    });

    it ('should throw an error if the sum argument is not a number', () => {
        expect(function() { instance.sum('1', 2) }).toThrow(new TypeError('[1] is not a number!'));
    });

    it ('should throw an error if the mult argument is not a number', () => {
        expect(function() { instance.mult('1', 2) }).toThrow(new TypeError('[1] is not a number!'));
    });
})