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

    testData.positive.forEach((data) => {
        it('should calculate the sum of argumens', () => {
            expect(instance.add(...data.args)).to.be.equal(data.sum);
            expect(spyAdd).to.have.been.called.once;
            expect(spyAdd).to.have.been.called.with(...data.args);
        });

        it('should multiply the arguments', () => {
            expect(instance.multiply(...data.args)).to.be.equal(data.mult);
            expect(spyMult).to.have.been.called.once;
            expect(spyMult).to.have.been.called.with(...data.args);
        });
    })

    testData.negative.forEach((data) => {
        it('should throw an error in sum', () => {
            expect(function () { instance.add(...data.args) }).to.throw(TypeError, data.errorMessage);
            expect(spyAdd).to.have.been.called.once;
            expect(spyAdd).to.have.been.called.with(...data.args);
        });

        it('should throw an error in mult', () => {
            expect(function () { instance.multiply(...data.args) }).to.throw(TypeError, data.errorMessage);
            expect(spyMult).to.have.been.called.once;
            expect(spyMult).to.have.been.called.with(...data.args);
        });
    })
})