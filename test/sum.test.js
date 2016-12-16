"use strict";

require('should');
const sum = require('../sum');

describe('sum', ()=> {
  it('should return sum of two numbers', ()=> {
    sum(1, 1).should.eql(2);
  });
});