import Currency from './3-currency.js';

class Pricing {
    constructor(amount, currency) {
        this._amount = this.validateNumber(amount, 'Amount');
        this._currency = this.validateCurrency(currency, 'Currency');
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        this._amount = this.validateNumber(newAmount, 'Amount');
    }

    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        this._currency = this.validateCurrency(newCurrency, 'Currency');
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }

    validateNumber(value, fieldName) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new TypeError(`${fieldName} must be a number`);
        }
        return value;
    }

    validateCurrency(value, fieldName) {
        if (!(value instanceof Currency)) {
            throw new TypeError(`${fieldName} must be an instance of Currency`);
        }
        return value;
    }
}

export default Pricing;
