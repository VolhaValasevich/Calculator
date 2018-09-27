'use strict';

const path = require('path');
const properties = require('properties');
const csv = require('node-csv').createParser();
const yaml = require('js-yaml');
const fs = require('fs');
const xlsx = require('xlsx');

class fileDataManager {

    byExtension(fileName) {
        const loadFile = {
            '.json': this.loadJsonFile,
            '.csv': this.loadCsvFile,
            '.yml': this.loadYmlFile,
            '.xlsx': this.loadXlsxFile,
            '.properties': this.loadPropertiesFile
        };
        let ext = path.extname(fileName);
        return loadFile[ext](fileName);
    };

    loadPropertiesFile(fileName) {
        return new Promise (function (resolve, reject) { 
            properties.parse(path.resolve(fileName), { path: true }, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    loadCsvFile(fileName) {
        return new Promise (function (resolve, reject) { 
            csv.mapFile(path.resolve(fileName), (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    loadJsonFile(fileName) {
        return require(path.resolve(fileName));
    }

    loadYmlFile(fileName) {
        return yaml.safeLoad(fs.readFileSync(path.resolve(fileName), 'utf8'));
    }

    loadXlsxFile(fileName) {
        return xlsx.readFileSync(path.resolve(fileName));
    }
}

module.exports = new fileDataManager();