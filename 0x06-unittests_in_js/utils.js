// utils.js

const Utils = {
  calculateNumber(type, a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      throw TypeError('Parameters must be numbers');
    }

    switch (type) {
      case 'SUM':
        return Math.round(numA) + Math.round(numB);
      case 'SUBTRACT':
        return Math.round(numA) - Math.round(numB);
      case 'DIVIDE':
        if (Math.round(numB) === 0) {
          return 'Error';
        }
        return Math.round(numA) / Math.round(numB);
      default:
        throw Error('Invalid type. Valid types are SUM, SUBTRACT, and DIVIDE');
    }
  },
};

module.exports = Utils;
