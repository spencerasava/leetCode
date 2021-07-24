
var romanToInt = function(s) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let total = 0;
  for ( let i = 0; i < s.length; i++) {
    if (romanObj[s[i]] < romanObj[s[i+1]]) {
      total += romanObj[s[i+1]] - romanObj[s[i]];
      i++;
    } else {
      total += romanObj[s[i]];
    }
  }
  return total;
};
