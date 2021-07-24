// Given a signed 32-bit integer x,
//return x with its digits reversed.
//If reversing x causes the value to go outside the signed
//32-bit integer range [-231, 231 - 1], then return 0.



var reverse = function(x) {
  //
      let isNeg = false;
      if (x < 0) {
        isNeg = true;
         x *= -1
      }
      let result = 0;
      let lastDigit = 0
      while (x >= 1) {
        lastDigit = x % 10;
        result = result * 10 + lastDigit;
        x = Math.floor(x/10);
      }
      if (result < (Math.pow(-2, 31)) || result > (Math.pow(2, 31) -1)) {
        return 0;
      }
      return isNeg ? result * -1 : result;
};