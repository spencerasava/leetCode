var isPalindrome = function(x) {
  let temp = x.toString();
  let mid = Math.floor(temp.length/2)
  let lastChar = temp.length - 1;
  for (let i = 0; i <= mid; i++) {
    if (temp[i] !== temp[lastChar - i]) {
      return false;
    }
  }
  return true;
};