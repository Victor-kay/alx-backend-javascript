class Currency {
    constructor(code, name) {
        this._code = this.validateString(code, 'Code');
        this._name = this.validateString(name, 'Name');
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = this.validateString(newCode, 'Code');
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = this.validateString(newName, 'Name');
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }

    validateString(value, fieldName) {
        if (typeof value !== 'string') {
            throw new TypeError(`${fieldName} must be a string`);
        }
        return value;
    }
}

export default Currency;
