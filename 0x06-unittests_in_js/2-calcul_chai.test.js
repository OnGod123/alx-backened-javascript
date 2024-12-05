import calculateNumber from './2-calcul_chai.js';
import { expect } from 'chai';

describe('calculateNumber', () => {
  it('should correctly sum two rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
  });

  it('should correctly subtract two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 5.6, 2.2)).to.equal(4);
  });

  it('should correctly divide two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 7.8, 2.1)).to.equal(4);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', () => {
    expect(() => calculateNumber('MULTIPLY', 1, 1)).to.throw(Error, 'Invalid type');
  });
});

