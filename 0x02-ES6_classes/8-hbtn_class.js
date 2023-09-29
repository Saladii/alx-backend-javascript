export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](info) {
    if (info === 'number') {
      return this.size;
    }
    if (info === 'string') {
      return this.location;
    }
    return 'a';
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }
}
