/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (var i = 0; i < s.length; i++) {
    if (s[i] in map) {
      if (stack.pop() !== map[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
    
};