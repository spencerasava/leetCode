var twoSum = function(nums, target) {
  var result = [];
    for ( var i = 0; i < nums.length - 1; i++) {
      for ( var j = i + 1; j < nums.length; j++ ) {
        if ( nums[j] === target - nums[i]) {
          result.push(i, j);
        }
      }
    }
  return result;
};