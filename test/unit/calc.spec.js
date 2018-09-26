'use strict';

const Calc = require('../../src/calculator');
const testData = require('../data/testdata.json');
const chai = require('chai').use(require('chai-spies'));
const expect = chai.expect;

describe('Calculator', () => {
    let instance;

    beforeEach(() => {
        instance = new Calc();
    });

    afterEach(() => {
        instance = null;
    });

    it ('should calculate the sum of argumens', () => {
        expect(instance.add(1, 2)).to.be.equal(3);
    });

    it ('should multiply the arguments', () => {
        expect(instance.multiply(3, 2)).to.be.equal(6);
    });

    it ('should throw an error if the sum argument is not a number', () => {
        expect(function() { instance.add('1', 2) }).to.throw(TypeError, '[1] is not a number!');
    });

    it ('should throw an error if the mult argument is not a number', () => {
        expect(function() { instance.multiply('1', 2) }).to.throw(TypeError, '[1] is not a number!');
    });
})