class Calculator {

    constructor() {
        this.result = 0;
    }

    checkArgs(args) {
        if (args.length < 1) throw new Error('No numbers were entered!');
        args.forEach((arg) => {
            if (typeof arg !== 'number') throw new TypeError(`[${arg}] is not a number!`);
        });
    }

    add(...args) {
        this.checkArgs(args);
        this.result = 0;
        args.forEach((arg) => {
            this.result += arg;
        })
        return this.result;
    }

    multiply(...args) {
        this.checkArgs(args);
        this.result = 1;
        args.forEach((arg) => {
            this.result *= arg;
        })
        return this.result;
    }

}

module.exports = Calculator;