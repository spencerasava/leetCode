// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

 var longestCommonPrefix = function(strs) {
  let result = '';
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {

    }
  }
};

const comomonPrefix = (arr) => {
  if (arr.length === 0) {
    return '';
  }
  let prefix = arr[0]
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.isEmpty()) {
        return '';
      }
    }
  }
  return prefix;
}


// Input: strs = ["flower","flow","flight"]
// Output: "fl"