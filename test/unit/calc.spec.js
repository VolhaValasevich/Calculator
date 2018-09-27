'use strict';

const Calc = require('../../src/calculator');
const testData = require('../data/testdata.json');
const chai = require('chai').use(require('chai-spies'));
const expect = chai.expect;

describe('Calculator', () => {
    let instance, spyAdd, spyMult;

    beforeEach(() => {
        instance = new Calc();
        spyAdd = chai.spy.on(instance, 'add');
        spyMult = chai.spy.on(instance, 'multiply');
    });

    afterEach(() => {
        instance = null;
    });

    it ('should calculate the sum of argumens', () => {
        expect(instance.add(1, 2)).to.be.equal(3);
        expect(spyAdd).to.have.been.called.once;
    });

    it ('should multiply the arguments', () => {
        expect(instance.multiply(3, 2)).to.be.equal(6);
        expect(spyMult).to.have.been.called.once;
    });

    it ('should throw an error if no arguments were entered for summing', () => {
        expect(function() { instance.add() }).to.throw(Error, 'No numbers were entered!');
        expect(spyAdd).to.have.been.called.once;
    });

    it ('should throw an error if no arguments were entered for multuplying', () => {
        expect(function() { instance.multiply() }).to.throw(Error, 'No numbers were entered!');
        expect(spyMult).to.have.been.called.once;
    });

    it ('should throw an error if the sum argument is not a number', () => {
        expect(function() { instance.add('1', 2) }).to.throw(TypeError, '[1] is not a number!');
        expect(spyAdd).to.have.been.called.once;
    });

    it ('should throw an error if the mult argument is not a number', () => {
        expect(function() { instance.multiply('1', 2) }).to.throw(TypeError, '[1] is not a number!');
        expect(spyMult).to.have.been.called.once;
    });
})