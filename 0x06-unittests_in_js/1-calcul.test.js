const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 2.5 and 3.2', function () {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.2), 6);
    });

    it('should return 5 when inputs are 1.4 and 3.7', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -1 when inputs are 2 and 3.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 3.5), -2);
    });

    it('should return 0 when inputs are 1.5 and 1.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 2 when inputs are 4 and 1.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 1.5), 2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0.4), 'Error');
    });

    it('should return "Error" when rounded b is 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0.4), 'Error');
    });
  });

  describe('Invalid Type', function () {
    it('should throw an error for invalid operation type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});
