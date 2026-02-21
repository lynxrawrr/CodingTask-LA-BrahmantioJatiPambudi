/**
 * Memeriksa apakah tanda kurung dalam string seimbang.
 * @param {string} s - String tanda kurung
 * @return {boolean} - true jika valid, false jika tidak
 */

const isValid = function (s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    const top = stack.pop();

    if (top !== pairs[ch]) {
      return false;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

// --- CONTOH PEMANGGILAN DAN OUTPUT YANG DIHARAPKAN ---
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true (tapi input minimal 1 karakter)
console.log(isValid("(((")); // false
console.log(isValid(")))")); // false
console.log(isValid("([{]}])")); // false (contoh invalid)
console.log(isValid("({[]})")); // true
