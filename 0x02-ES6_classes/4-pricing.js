import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newVal) {
    if (typeof newVal !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newVal;
  }

  get currency() {
    return this._currency;
  }

  set currency(newVal) {
    if (!(newVal instanceof Currency)) {
      throw new TypeError('Currency must be a class object');
    }
    this._currency = newVal;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
