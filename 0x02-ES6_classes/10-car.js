export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this.brand, this.motor, this.color);
  }

  get brand() {
    return this._brand;
  }

  set brand(newValue) {
    this._brand = newValue;
  }

  get motor() {
    return this._code;
  }

  set motor(newValue) {
    this._motor = newValue;
  }

  get color() {
    return this._color;
  }

  set color(newValue) {
    this._color = newValue;
  }
}
