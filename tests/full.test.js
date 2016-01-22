var candyOrganizer = require('../candy-sorter');
var expect = require('chai').expect;
var Random = require('./utils/random');

describe("Full test | ", function(){
  it.skip("should return null for null input", function(){
    var res = candyOrganizer(null);
    expect(res).to.eq(null);
  });

  it.skip("should return null for an empty array ", function(){
    var res = candyOrganizer([]);
    expect(res).to.eq(null);
  });

  it("should return index zero for 1x1 matrix", function(){
    randomVal = Random.integer(100);
    var res = candyOrganizer([randomVal]);
    expect(res).to.eq([0]);
  });

  it("should return index zero for 1x1 matrix", function(){
    var res = candyOrganizer([[0, 2]]);
    expect(res).to.equal([1]);
  });

  it("should return correct indices order for 3x3 matrix", function(){
    var data = [
      [3,2,0],
      [0,3,10],
      [1,5,2]
    ]
    var res = candyOrganizer(data);
    expect(res).to.eq([0,2,1])
  });

  it("should return correct indices order for 3x3 matrix", function(){
    var data = [
      [3,2,5],
      [0,3,10],
      [1,2,5],
      [3,5,2],
      [1,1,0]
    ]
    var res = candyOrganizer(data);
    expect(res).to.equal([0,2,2,1,0])
  });
});
