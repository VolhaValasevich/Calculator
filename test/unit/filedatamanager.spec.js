'use strict';

const manager = require('../../src/fileDataManager');
const chai = require('chai').use(require('chai-spies'));
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
const expectedResults = require('../data/examples.json');
chai.use(chaiAsPromised);

describe('File Data Manager', () => {

    it('should read property files', async () => {
        const result = await manager.byExtension('./test/data/testdata.properties')
        expect(result).to.be.eql(expectedResults.properties);
    });

    it('should read csv files', async () => {
        const result = await manager.byExtension('./test/data/testdata.csv');
        expect(result).to.be.eql(expectedResults.csv);
    });

    it('should read json files', () => {
        const result = manager.byExtension('./test/data/testdata.json');
        expect(result).to.be.eql(expectedResults.json);
    });

    it('should read xlsx files', () => {
        const result = manager.byExtension('./test/data/testdata.xlsx');
        expect(result.Sheets).to.be.eql(expectedResults.xlsx.Sheets);
    });

    it('should read yml files', () => {
        const result = manager.byExtension('./test/data/testdata.yml');
        expect(result).to.be.eql(expectedResults.yml);
    });
})