var INF_NEG = -10000000

module.exports = function(candyObj, taboo) {
  if(!candyObj || !candyObj.prefs || candyObj.prefs.length === 0) {
    return null;
  }

  taboo = taboo || {};
  var prefs = candyObj.prefs;
  var highest = null;
  var secondHighest = null;
  for(var i = 0; i < prefs.length; i++) {
    if(!taboo[i]) {
      // Current index is not in taboo list so it can be used
      var current = prefs[i];
      if(current > (highest || INF_NEG)) {
        // Found a new highest value
        secondHighest = highest;
        highest = current;
      }
      else if(current > (secondHighest || INF_NEG)) {
        // Found a new second highest value
        secondHighest = current;
      }
    }
  }
  highest = highest || 0;
  secondHighest = secondHighest || 0;
  return Math.abs(highest - secondHighest);
};
