var expect = require('chai').expect;
var findDiff = require('../util/findDiff');

describe("Find Diff | ", function(){
  it("base cases", function(){
    expect(findDiff(null, null)).to.equal(null);
  });

  it("returns null for empty preferences", function() {
    var candy = {
      id: 0
    };
    expect(findDiff(candy, {})).to.equal(null);

    candy.prefs = [];
    expect(findDiff(candy, {})).to.equal(null);
  });

  it("candy diffs", function(){
    var candy = {
      id: 0,
      prefs: [5, 4, 1]
    };

    expect(findDiff(candy, {})).to.equal(1);
    expect(findDiff(candy, null)).to.equal(1);
    expect(findDiff(candy, {0: true})).to.equal(3);
    expect(findDiff(candy, {1: true})).to.equal(4);
    expect(findDiff(candy, {2: true})).to.equal(1);
  });
});
