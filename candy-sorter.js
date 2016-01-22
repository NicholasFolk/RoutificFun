var findDiff = require('./util/findDiff.js');

var tabooList = {};
var n, k, bucketCounts, candyBuckets;

var Candy = function(id, prefs) {
	this.id = id;
	this.prefs = prefs;
}

/**
* Creates a list of candy objects
*/
var createCandyList = function(candyGrid) {
	var candies = [];
	for (var i = 0; i < k ; i++) {
		candies.push(new Candy(i, candyGrid[i]));
	}
	return candies;
}

/**
* Sorts candies based on diffList function
*/
var sortCandies = function(candies) {
	return candies.sort(function(a, b) {
		return findDiff(a, tabooList) - findDiff(b, tabooList);
	});
}

/**
* Adds candy and returns true if a bucket is filled
*/
var addCandy = function(candy) {
	var curMax = 0;
	var curInd;
	for (var i = 0; i < k ; i++) {
		if (tabooList[i] && candy.prefs[i] > curMax) {
			curMax = candy.prefs[i];
			curInd = i;
		}

	}
	candyBuckets[candy.id] = curInd;
	bucketCounts[curInd]--;
	if (bucketCounts[curInd] === 0) {
		tabooList[curInd] = true;
		return true;
	}
	return false;
}

/**
* Initializes bucketCounts (for checking if buckets are full);
* and candyBuckets (the array of bucket numbers to return to the user of the module)
*/
var initBuckets = function() {
	candyBuckets = new Array(k);
	bucketCounts = new Array(n);

	for (var i = 0; i < k ; i++) {
		candyBuckets[i] = -1;
	}

	for (var i = 0; i < n ; i++) {
		bucketCounts[i] = Math.ceil(n / k);
	}
}

module.exports = function(candyGrid) {

	n = candyGrid.length;
	if (n === 0) {
		// an empty candy grid was input
		return [];
	}
	k = candyGrid[0].length;
	initBuckets();

	var candies = createCandyList(candyGrid);

	while (candies.length > 0) {
		var newBucketFilled = false;
		sortCandies(candies);
		while (!newBucketFilled && candies.length > 0) {
			candy = candies[0];  // optimization: store in reverse order to chop last off the array?
			newBucketFilled = addCandy(candy);
			candies.splice(0,1);
		}
	}

	return buckets;
}
